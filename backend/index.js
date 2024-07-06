import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import csvRouter from "./routes/csv.routes.js";
import cors from "cors";

// Por motivos de agilidade para avaliar o teste, decidi deixar o .env descomentado e colocar a key do MongoDb direto no código
// E também liberei o "Access from anywhere no MongoDb para os avaliadores não terem problema de conexão ao banco de dados"
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://roecwebdev:asuh1@kronoos-test-cluster.kvrjc4x.mongodb.net/?retryWrites=true&w=majority&appName=KRONOOS-TEST-CLUSTER"
  )
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
