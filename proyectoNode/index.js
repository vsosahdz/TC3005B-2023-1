//Importar las bibliotes
const express = require('express');
const personaRoutes = require('./routes/personas');
const app = express();
//Definir el middleware
app.use(express.json());
app.use('/personas',personaRoutes);
//Definir una ruta 
app.get('/prueba',(request, response)=>{
    console.log('Servidor de prueba 2');
    response.send('<h1>Servidor en línea</h1>');
});
//Levantar el server y escuchar peticiones
app.listen(8080,()=>{
    console.log("Servidor en línea");
})

