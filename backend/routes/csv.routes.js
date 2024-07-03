import express from "express";
import multer from "multer";
import { uploadCsvFile } from "../controllers/csv.controller.js";

const upload = multer({ dest: "upload/" });

const router = express.Router();

router.post("/upload", upload.single("file"), uploadCsvFile);

export default router;
