import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getsingleProductContorller,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
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
router.post("/product-filters",productFilterController)

// product count 
router.get('/product-count',productCountController)

// product per page
router.get('/product-list/:page',productListController)


export default router;
