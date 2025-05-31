const express = require("express");
const router = express.Router();
const productController = require("../controllers/shop");
const isAuth = require("../middleware/is-auth");

router.get("/", productController.getIndex);
router.get("/products", productController.getProducts);
router.get("/products/:productId", productController.getProduct);

router.get("/cart", isAuth, productController.getCart);
router.post("/cart", isAuth, productController.postCart);
router.post("/cart-delete-item", isAuth, productController.postCartDeleteItem);
router.post("/create-order", isAuth, productController.postOrder);
router.get("/orders", isAuth, productController.getOrders);

module.exports = router;
