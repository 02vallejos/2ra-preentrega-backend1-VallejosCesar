# Bootcamp: CoderHouse

## Curso: Backend Avanzado

### Comisión: 70410

### Alumno: César David Vallejos

# Primera Pre-Entrega

## App Backend para Tienda E-commerce

### Segunda pre-entrega del proyecto final

Desarrollo del backend para una tienda en línea.

## Temas implementados:

- **Gestor de vistas con Handlebars:** Se implementó Handlebars como motor de plantillas, configurado con Express-Handlebars para su integración con la aplicación.
    
- **Comunicación con las vistas:** Se utilizó la librería Socket.io para la comunicación en tiempo real entre el servidor (`app.js`) y las vistas, permitiendo la actualización dinámica de los datos.
    

## Funcionamiento de la tienda:

La aplicación consiste en un servidor Express que funciona como backend de una tienda e-commerce.

### Vistas disponibles:

- `**/products**`: Muestra los productos disponibles en formato de tarjetas, obtenidos desde un archivo de persistencia en formato `.json`.
- `**/realTimeProducts**`: Similar a la vista anterior, pero con funcionalidades adicionales:
    - Cada producto tiene un botón para eliminarlo.    
    - La página se actualiza automáticamente al eliminar un producto.
    - Se incluye un formulario para agregar nuevos productos, los cuales se reflejan en la página en tiempo real.

### Configuración de sevidor (app.js):

El backend se desarrolla con **Express.js**, configurado en el archivo `app.js`. Se utilizan módulos y librerías esenciales:

- `express`: Para manejar las rutas y middleware. 
- `express-handlebars`: Para renderizar las vistas con Handlebars.  
- `socket.io`: Para comunicación en tiempo real.
- `ProductManager`: Clase que gestiona los productos en la tienda.