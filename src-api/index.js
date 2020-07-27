require("dotenv").config();

const app = require("./server");
require('./database');

// Server is listening
app.listen(3000, () => {
  console.log("Server on port", 3000);
});
