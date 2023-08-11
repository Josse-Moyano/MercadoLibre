# Documentación del Backend

Funciones de Acceso a la API de MercadoLibre:
    getItems(query): Obtiene una lista de productos según una consulta de búsqueda.
    getItem(id): Obtiene los detalles de un producto por su ID.
    getItemDescription(id): Obtiene la descripción de un producto por su ID.
    getItemCategories(itemId): Obtiene las categorías de un producto por su ID.

Rutas:
    /api/items - GET: Busca y obtiene productos según una consulta.
    /api/items/:id - GET: Obtiene detalles de un producto por su ID.


# Documentación del Frontend

Componentes:
    BreadCrumbs: Muestra categorías de productos y facilita la navegación.
    Card: Muestra detalles resumidos de un producto, como su título, precio y ubicación.
    CardDetail: Muestra detalles completos de un producto, incluyendo descripción, condición y vendores. Ademas de un loading mientras se cargan los resultados
    Cards: Muestra una lista de productos con componentes Card o un loading mientras se cargan los resultados.
    ErrorImage: Muestra una imagen cuando se produce un error, brindando retroalimentación visual al usuario.
    SearchBar: Muestra una barra de búsqueda con el logo de la aplicación, permitiendo a los usuarios ingresar consultas.

Páginas:
    Home: Presenta una imagen de fondo en la página principal, proporcionando un inicio visual atractivo para los usuarios.
    ProductDetail: Muestra detalles completos de un producto seleccionado.
    Products: Muestra una lista de productos utilizando el componente "Cards". Los usuarios pueden buscar productos y ver sus detalles haciendo clic en las tarjetas.

Interacción con el Backend:
    El frontend interactúa con el backend a través de solicitudes HTTP utilizando la biblioteca axios.

Estado y Redux:
    Se utiliza Redux para administrar el estado de la aplicación. Los datos de productos y detalles de productos se almacenan en el estado global y se actualizan mediante acciones y reductores.

Enrutamiento:
    El enrutamiento se maneja con la biblioteca react-router-dom, lo que permite que los usuarios naveguen entre las diferentes páginas.

Estilos:
    Los componentes y páginas están diseñados con styled-components, lo que garantiza una apariencia coherente y agradable en toda la aplicación.


# Guía para Desplegar la Página Web

1. Clonar el Repositorio: 
Descargar el repositorio desde GitHub a la computadora local. Esto se puede hacer utilizando el comando git clone seguido de la URL del repositorio.

2. Instalar Dependencias del Backend: 
Navega a la carpeta api en el repositorio clonado y abre una terminal. Luego, instala las dependencias utilizando el siguiente comando:
- cd api
- npm install

3. Iniciar el Servidor Backend: 
Ejecuta el servidor backend utilizando el siguiente comando:
- node index.js
Esto iniciará el servidor backend en el puerto especificado. Asegúrate de que el servidor esté funcionando correctamente.

4. Instalar Dependencias del Frontend:
Navega a la carpeta client en el repositorio clonado y abre otra terminal. Luego, instala las dependencias del frontend utilizando el siguiente comando:
- cd client
- npm install

5. Iniciar el Servidor Frontend: 
Ejecuta el servidor frontend utilizando el siguiente comando:
- npm start
Esto iniciará el servidor frontend y abrirá automáticamente la página web en el navegador predeterminado. Si no se abre automáticamente, puedes acceder a la página en http://localhost:3000.


# Explora la Página Web

Ahora deberías poder explorar la página web en tu computadora local. Puedes buscar productos, ver detalles y navegar por las diferentes páginas.