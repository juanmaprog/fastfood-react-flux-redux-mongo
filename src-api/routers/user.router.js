import { router } from 'express';//importamos libreria express en el archivo router.
const usercontrollers = require('../controllers/users/user.controllers');//guardamos toda la logica de user.controller en la variable usercontroller siguiendo su ruta de archivos.
const router = require ('express').Router();//activamos la funcion .Router de la libreria express y la guardamos en dicha variable.
//ENDPOINT DE LA LOGICA DE USUARIOS.
router.get('/allusers', usercontrollers.allUsers)//nos traemos a todos los usuarios mediante la logica declarada de allUsers.
router.get('/allactive', usercontrollers.allUsersActives)//nos traemos a todos los usuarios mediante la logica declarada de allUsersActives.
router.post('/allinactives', usercontrollers.allUsersInactives)//nos traemos a todos los usuarios mediante la logica declarada de allUsersInactives.
router.delete('/alldeleteds', usercontrollers.allUsersDeleteds)//nos traemos a todos los usuarios mediante la logica declarada de allUserDeleteds.
router.post('/userid', usercontrollers.userById)//nos traemos a todos los usuarios mediante la logica declarada de userById.
router.post('/createuser', usercontrollers.createNewUser)//nos traemos a todos los usuarios mediante la logica declarada de createNewUsers.
router.post('/updateuser', usercontrollers.updateUser)//nos traemos a todos los usuarios mediante la logica declarada de updateUser.
router.delete('/deleteuser', usercontrollers.deleteUser)//nos traemos a todos los usuarios mediante la logica declarada de deleteUser.
export default router;//exportamos el archvio user.router mediante la siguiente linea.