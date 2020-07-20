//======IMPORTACIONES======//
const express = require("express"); //requerimos la libreria express
const exphbs = require("express-handlebars");
const path = require("path"); //Libreria de caminos internas del equipo de trabajo (Juan, Oscar, Josemi)
const methodOverride = require("method-override"); //
const session = require("express-session"); //
const flash = require("connect-flash");
const passport = require("passport");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const CartRouter = require("./routes/cart.routes");
const ProductRouter = require("./routes/product.routes");
const DocumentRouter = require("./routes/document.routes");

//======INICIALIZADORES======//
const app = express();
require("./config/passport");
// Initialize sample data
// require("./initialData/appServerInit");
// settings
app.set("port", process.env.PORT || 3003);
/* app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs"); */
// middlewares
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({urlencoded:false}));
// app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(morgan("dev"));
app.use(express.json());
// Global Variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

//=======ROUTES======//

//CART ROUTES
app.use("/carts", CartRouter); //ruta para las funcionalidades logicas de varios carritos
app.use("/cart", CartRouter); //ruta para la funcionalidad logica de un carrito

//PRODUCT ROUTES
app.use("/products", ProductRouter);
app.use("/product", ProductRouter);

//DOCUMENTS ROUTES
app.use("/api/documents", DocumentRouter);
app.use("/api/document", DocumentRouter);


//STATIC FILES
app.use(express.static(path.join(__dirname, "public")));
module.exports = app;
