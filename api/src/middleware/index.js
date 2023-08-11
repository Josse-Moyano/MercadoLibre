const axios = require('axios');

async function getItems(query) {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Error al hacer la solicitud a la API de MercadoLibre:', error.message);
        return;
      }
}

async function getItem(id) {
  const url =  `https://api.mercadolibre.com/items/${id}`
  try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error al hacer la solicitud a la API de MercadoLibre:', error.message);
      return;
    }
}

async function getItemDescription(id) {
  const url =  `https://api.mercadolibre.com/items/${id}/description`
  try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error al hacer la solicitud a la API de MercadoLibre:', error.message);
      return;
    }
}

async function getItemCategories(itemId) {
  const url = `https://api.mercadolibre.com/categories/${itemId}`;
  try {
    const response = await axios.get(url);
    const categoryDetail = response.data;
    return categoryDetail ? categoryDetail.path_from_root.map((category) => category.name) : [];
  } catch (error) {
    console.error('Error al obtener detalles de categoría:', error.message);
    return [];
  }
}


module.exports = {
    getItems,
    getItem,
    getItemDescription,
    getItemCategories
  };