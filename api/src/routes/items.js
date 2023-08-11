const express = require('express');
const router = express.Router();
const { getItems, getItem, getItemCategories, getItemDescription } = require('../middleware');

router.get('/items', async (req, res) => {
  try {
    const data = await getItems(req.query.q);

    if (!data || data.results.length === 0) {
      res.status(404).json({ error: 'No se encontraron resultados' });
      return;
    }

    const author = {
      name: 'Josse',
      lastname: 'Moyano',
    };

    let allItemCategories = [];

    const items = await Promise.all(
      data.results.slice(0, 4).map(async (item) => {
        const categories = await getItemCategories(item.category_id);
        allItemCategories = [...allItemCategories, ...categories];

        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: Math.floor(item.price),
            decimals: '00',
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          address: item.address.state_name,
        };
      })
    );

    const categoryCounts = allItemCategories.reduce((acc, category) => {
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    const sharedCategories = Object.keys(categoryCounts).filter(category => categoryCounts[category] === 4);

    let categoriesToSend = sharedCategories.length > 0 ? sharedCategories : [allItemCategories[0]];

    const formattedResponse = {
      author,
      categories: categoriesToSend,
      items,
    };

    res.json(formattedResponse);
  } catch (error) {
    console.error('Error al formatear la respuesta:', error.message);
    res.status(500).json({ error: 'Error al formatear la respuesta' });
  }
});


router.get('/items/:id', async (req, res) => {
  try {

    const id = req.params.id;
    const itemData = await getItem(id);
    const descriptionData = await getItemDescription(id);

    const author = {
      name: 'Josse',
      lastname: 'Moyano',
    };

    const itemCategories = await getItemCategories(itemData.category_id);

    const item = {
      id,
      title: itemData.title,
      price: {
        currency: itemData.currency_id,
        amount: Math.floor(itemData.price),
        decimals: '00',
      },
      picture: itemData.thumbnail,
      condition: itemData.condition,
      free_shipping: Boolean(itemData.shipping.free_shipping),
      sold_quantity: itemData.sold_quantity,
      description: descriptionData.plain_text,
    };

    const formattedResponse = {
      author,
      item,
      categories: itemCategories,
    };

    res.json(formattedResponse);
  } catch (error) {
    console.error('Error al obtener los datos del artículo:', error.message);
    res.status(500).json({ error: 'Error al obtener los datos del artículo' });
  }
});

module.exports = router;
