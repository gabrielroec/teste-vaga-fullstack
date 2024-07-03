import express from "express";
import { uploadCsvFile } from "../controllers/csv.controller.js";
const router = express.Router();

router.post("/upload", uploadCsvFile);

export default router;
