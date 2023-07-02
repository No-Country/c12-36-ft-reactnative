const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 1236


app.get('/', (req, res)=>{
    res.send({ mensaje: "Hola mundo" })
})



app.listen(PORT, ()=>{
    console.log(`Escuchando en puerto ${PORT}`)
})