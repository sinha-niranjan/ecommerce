import express from "express";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/createCategoryController.js";

const router = express.Router();

// routes

// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// getAll category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

// delete Catrgory
router.get('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)

export default router;
