const port = 3001;
const server = require('./app.js');
const itemsRoute = require('./src/routes/items');

server.use('/api', itemsRoute);
server.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
  });