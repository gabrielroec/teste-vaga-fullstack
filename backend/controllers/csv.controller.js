import csvFileData from "../models/csv.model.js";
import fs from "fs";
import csv from "csv-parser";
import path from "path";

const parseCsv = (csvFilePath) => {
  const results = [];
  return new Promise((res, rej) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => {
        res(results);
      })
      .on("error", (error) => {
        rej(error);
      });
  });
};

const formateCsvFile = async (csvFilePath) => {
  const csvData = await parseCsv(csvFilePath);
  const formattedCsvFiles = [];

  for (const item of csvData) {
    const formattedCsvFile = {
      vlTotal: item.vlTotal,
    };
    formattedCsvFiles.push(formattedCsvFile);
  }

  console.log(formattedCsvFiles);

  await csvFileData.insertMany(formattedCsvFiles);
  return formattedCsvFiles;
};

export const uploadCsvFile = async (req, res) => {
  try {
    console.log("START");
    const csvFilePath = path.join(__dirname, "..", "upload", req.file.filename);
    const data = await formateCsvFile(csvFilePath);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing csv file" });
  }
};
