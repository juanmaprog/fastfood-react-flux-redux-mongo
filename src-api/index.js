require("dotenv").config();//activamos la funcion config de la libreria dotenv que nos permite usar archivos de configuracion de toda la aplicacion en este caso el .env y lo ponemos en el indexjs porque de ahi se expande a toda la aplicación.

const app = require("./server");
require('./database');//requerimos el archivo database donde esta la dirección de nuestra base de datos de mongo

// Server is listening
app.listen(3000, () => {//le decimos el puerto por el que nuestra base de datos se va a oir
  console.log("Server on port", 3000);//en este caso el puerto es el 3000
});

// app.listen(3004, () => {
//   console.log("Server on port", 3004);
// });
