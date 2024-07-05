import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import csvRouter from "./routes/csv.routes.js";
import cors from "cors";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());

app.use(cors());

app.listen("8000", () => {
  console.log("Server is running on port 8000");
});

app.use("/api", csvRouter);
