const router = require("express").Router();
const userCtrl = require("../controllers/user.controllers");

router.get('/', userCtrl.allUsers)
//  router.get('/allactive', usercontrollers.allUsersActives)

 router.post('/createuser', userCtrl.createNewUser)
// router.post('/allinactives', usercontrollers.allUsersInactives)
// router.post('/userid', usercontrollers.userById)
// router.post('/updateuser', usercontrollers.updateUser)

// router.delete('/alldeleteds', usercontrollers.allUsersDeleteds)
// router.delete('/deleteuser', usercontrollers.deleteUser)

module.exports = router;