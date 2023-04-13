import express from "express";
const router = express.Router();
import {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/properties.js";

router.get("/", getProperties);

router.get("/:id", getProperty);

router.post("/", createProperty);

router.patch("/:id", updateProperty);

router.delete("/:id", deleteProperty);

export default router;
