import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import csvRouter from "./routes/csv.routes.js";

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

app.listen("5000", () => {
  console.log("Server is running on port 5000");
});

app.use("/api", csvRouter);
