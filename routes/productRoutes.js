import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getsingleProductContorller,
  prodcutCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  serachProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

// routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get products
router.get("/get-product", getProductController);

// single product
router.get("/get-product/:slug", getsingleProductContorller);

// get photo
router.get("/product-photo/:pid", productPhotoController);

// delete photo
router.get("/delete-product/:pid", deleteProductController);

// filter
router.post("/product-filters", productFilterController);

// product count
router.get("/product-count", productCountController);

// product per page
router.get("/product-list/:page", productListController);

// search product
router.get("/search/:keyword", serachProductController);

// similar product
router.get("/related-product/:pid/:cid", relatedProductController);

// category wise product
router.get("/product-category/:slug", prodcutCategoryController);

// payments routes
// token
router.get("/braintree/token", braintreeTokenController);

// payments
router.post('/braintree/payment',requireSignIn,braintreePaymentController)

export default router;
