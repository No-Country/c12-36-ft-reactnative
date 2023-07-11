const Router = require('express')
const {getUsers, getUserById, editUser,  createUser, deleteUser} =require('../controllers/usersControllers')
const router = Router()

router.get('/', getUsers)

router.get('/:id', getUserById)

router.put('/:id', editUser)

router.post('/',  createUser)

router.delete("/:id", deleteUser)



module.exports = router