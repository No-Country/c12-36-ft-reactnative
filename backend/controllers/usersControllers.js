const Users = require("../models/user.model");
require("dotenv").config();

//Obtener todos los usuario
const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.send(users);
  } catch (error) {
    res.status(404).send(error);
  }
};

//Obtener usuario por ID
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    res.send(user);
  } catch (error) {
    res.status(404).send(error);
  }
};

//Crear Usuario
const createUser = async (req, res) => {
  try {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      isActivated: req.body.isActivated || false,
    };
    const user = Users.create(newUser);
    res
      .status(201)
      .send({ mensaje: "Usuario creado con exito", usuario: newUser });
  } catch (error) {
    res.status(404).send(error);
  }
};

//Modificar usuario
const editUser = async (req, res) => {
  const id = req.params.id;
  const userEdited = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    isActivated: req.body.isActivated,
    dateOfBirth: req.body.dateOfBirth,
    dni: req.body.dni,
    nacionality:  req.body.nacionality,
    address: {
        street: req.body.address.street,
        number: req.body.address.number,
        zipcode: req.body.address.zipcode
      },
  
  };
  try {
    const user = await Users.findByIdAndUpdate(id, userEdited);
    res
      .status(200)
      .send({ mensaje: "Usuario modificado con éxito", user: userEdited });
  } catch (error) {
    res.status(404).send(error);
  }
};

//Eliminar usuario
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Users.findByIdAndDelete(id);
    res
      .status(200)
      .send({ mensaje: "Usuario eliminado con éxito", user: user });
  } catch (error) {
    res.status(404).send(error);
  }
};

//Login usuario
//Reset password

module.exports = {
  getUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};
