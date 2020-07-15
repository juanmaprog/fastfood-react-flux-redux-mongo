//delega toda la responsabilidad del servidor a este archivo

//============= IMPORTACIONES ===============
const CartRouter = require('./routes/cart.routes');
const ProductRouter = require('./routes/product.routes');
const express = require("express");//requerimos la libreria express
const exphbs = require("express-handlebars");
const path = require("path");//Libreria de caminos internas del equipo de trabajo (Juan, Oscar, Josemi)
const methodOverride = require("method-override");//
const session = require("express-session");//
const flash = require("connect-flash");
const passport = require("passport");
const morgan = require("morgan");
const bodyParser = require('body-parser');
//============= INICIALIZADORES ===============
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
<<<<<<< HEAD
//============= ROUTES ===============
  //cart routes
app.use('/carts', CartRouter);
app.use('/cart', CartRouter);
  //family routes
app.use('/family', FamilyRouter);
  //product routes
app.use('/products', ProductRouter);
  //ingredinets routes
app.use('/ingredients',IngredientsRouter);
=======


//============= ROUTES ===============

  //cart routes
app.use('/carts', CartRouter);
// app.use('/cart', CartRouter); 

  //product routes
app.use('/products', ProductRouter);




>>>>>>> 167b70a063e52c31ca889339ee4f3bcc964da8ae
/* app.use('/products', ProductRouter);
app.use('/documents', CartRouter); */
// app.use(require("./routes/cart.routes"));
//  app.use(require("./routes/index.routes"));
// app.use(require("./routes/user.routes"));
/*app.use(require("./routes/rentals.routes"));
app.use(require("./routes/customers.routes"));
app.use(require("./routes/movies.routes"));
app.use(require("./routes/artists.routes"));
app.use(require("./routes/companies.routes")); */
// static files
app.use(express.static(path.join(__dirname, "public")));
module.exports =  app;