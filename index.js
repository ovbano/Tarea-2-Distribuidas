const express = require('express'); // Importar express
const app = express(); // Asignar mi aplicación a express
const port = 3000; // Asignación de puerto

// Agregación de ruta raíz
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

// Agregación de nueva ruta
app.get('/nueva_ruta', (req, res) => {
  res.send('Hola mundo 2');
});

// Agregación de nueva ruta
app.get('/products', (req, res) => {
  res.json({
    name: 'Producto 1',
    precio: 150,
  });
});


// Mandas a escuchar el puerto 3000
app.listen(port, ()=>{
  console.log('Servidor ejecutandose en el puerto ' + port)
});

