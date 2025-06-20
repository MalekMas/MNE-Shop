const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth"); // <== Import the middleware

router.get("/add-product", isAuth, adminController.getAddProduct);
router.get("/products", isAuth, adminController.getProducts);
router.get("/edit-product/:ProductId", isAuth, adminController.getEditProduct);
router.post("/edit-product", isAuth, adminController.postEditProduct);
router.post('/add-product',isAuth, productValidator.add, productValidate,adminController.postAddProduct);
router.post("/delete-product", isAuth, adminController.postDeleteProduct);

module.exports = router;