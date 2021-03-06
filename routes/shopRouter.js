const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  addToCart,
  getAProduct,
  getCartItems
} = require("../controllers/productController");

const { uploadProductImage } = require("../controllers/uploadController");

router.route("/sell").post(createProduct);
router.route("/shop").get(getAllProducts);
router.route("/uploads").post(uploadProductImage);
router.route("/cart").post(addToCart);
router.route("/single").get(getAProduct)
router.route("/cartItems").get(getCartItems)

module.exports = router;
