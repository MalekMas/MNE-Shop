const Product = require("../models/products");

exports.getIndex = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        PageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {};
exports.getProduct = (req, res, next) => {};
exports.postCart = (req, res, next) => {};
exports.getCart = (req, res, next) => {};
exports.postCartDeleteItem = (req, res, next) => {};
exports.postOrder = (req, res, next) => {};
exports.getOrders = (req, res, next) => {};
