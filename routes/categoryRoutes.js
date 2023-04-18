import express from "express";


import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createCategoryController, updateCategoryController } from "../controllers/createCategoryController.js";

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
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)


export default router;

