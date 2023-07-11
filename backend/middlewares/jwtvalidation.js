/*const jwt = require('jsonwebtoken');
require('dotenv').config();
const Users = require("../models/user.model");

const authenticateToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;   // obtengo el token desde el front
    const accessToken = authorizationHeader && authorizationHeader.split(' ')[1]; // verifico que exista y sea valido el token
    if (!accessToken) {
      return res.status(401).json({ message: 'No se ha proporcionado un token de acceso' }); // sino existe el token resp negativa
    }

    const decodedToken = jwt.verify(accessToken, process.env.secretKey);  // verifica el token con la clave secreta
    const user = await User.findOne({ email: decodedToken.email }); // busca por email al usuario en la BD manteniendo la codificacion con el token
    if (!user) {
      return res.status(401).json({ message: 'Token de acceso no válido' });
    }

    req.user = user; // almacena el objeto user en req.user para ser usado mas adelante
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al autenticar el token de acceso' });
  }
};

module.exports = {
    authenticateToken
  };*/
