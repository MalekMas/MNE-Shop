const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(expressSession);

// Routes
const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");
const authRoutes = require("./routes/auth");
const errorController = require("./controllers/errors");

// MongoDB session store
const mdbsession = MongoDBSession({
  uri: "mongodb://localhost:27017/shop",
  collection: "sessions",
});

// EJS setup
app.set("view engine", "ejs");
app.set("views", "views");

// Session middleware
app.use(
  expressSession({
    secret: "Hossam",
    resave: false,
    saveUninitialized: false,
    store: mdbsession,
  })
);

// Make isAuthenticated available in all views
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isAuthenticated;
  next();
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Route usage
app.use(shopRouter);
app.use("/admin", adminRoutes);
app.use(authRoutes);

// 404 handler
app.use(errorController.get404);

// MongoDB connection + start server
mongoose.connect("mongodb://localhost:27017/shop").then(() => {
  console.log("Connected to MongoDB successfully!");
});
app.listen(8080);
