require("dotenv").config();

const app = require("./server");
// require('./database');

// Server is listening
// app.listen(app.get("port"), () => {
//   console.log("Server on port", app.get("port"));
// });

app.listen(3004, () => {
  console.log("Server on port", 3004);
});
