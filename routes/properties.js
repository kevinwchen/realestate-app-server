import express from "express";
const router = express.Router();
import {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/properties.js";
import getPropertyById from "../middleware/getPropertyById.js";

router.get("/", getProperties);

router.get("/:id", getPropertyById, getProperty);

router.post("/", createProperty);

router.patch("/:id", getPropertyById, updateProperty);

router.delete("/:id", getPropertyById, deleteProperty);

export default router;
