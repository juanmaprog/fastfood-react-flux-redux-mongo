require("dotenv").config();//activamos la funcion config de la libreria dotenv que nos permite usar archivos de congfiguracion de toda la aplicacion en este caso el .env y lo ponemos en el indexjs porque de ahi se expande a toda la aplicación.

const app = require("./server");
// require('./database');

// Server is listening
app.listen(3000, () => {
  console.log("Server on port", 3000);
});
