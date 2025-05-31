const express = require("express");
const router = express.Router();
const shopController = require("../controllers/auth");
router.get("/login", shopController.getLogin);
router.post("/login", shopController.postLogin);
router.get("/logout", shopController.getLogout);
module.exports = router;
