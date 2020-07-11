import { router } from "express";//importamos la libreria express.
const logscontrollers = require("../controllers/logs/logs.controllers");//guardamos dentro de la variable logscontrollers toda la logica que hay en el archivo logs.controllers.
const router = require("express").Router();//guardamos en la funcion router la funcion .Router de la libreria express.

//ENDPOINTS DE LA LOGICA DE LOGINS.
router.get("/logs", logscontrollers.allLogs);//nos traemos a todos los logins mediante la logica declarada de allLogs.

export default router;//exportamos el archivo logs.router mediante la siguiente linea.