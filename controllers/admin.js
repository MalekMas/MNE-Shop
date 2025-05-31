const product = require("../models/products");
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const nProd = new product({
    title: title,
    description: description,
    price: price,
  });
  nProd.save();
  return res.redirect("/products");
};

exports.getProducts = (req, res, next) => {
  product.find().then((products) => {
    return res.render("admin/products", {
      PageTitle: "Shop Products",
      products: products,
    });
  });
};

exports.getEditProduct = (req, res, next) => {};
exports.postEditProduct = (req, res, next) => {};
exports.postDeleteProduct = (req, res, next) => {};
exports.getAddProduct = (req, res, next) => {
  return res.render("admin/add-product", { PageTitle: "Add Product" });
};
