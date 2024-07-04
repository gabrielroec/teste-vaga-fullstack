import csvFileData from "../models/csv.model.js";
import fs from "fs";
import csvParser from "csv-parser";
import path from "path";
import { formatDate } from "../utils/csv.utils.js";

const parseCsv = (csvFilePath) => {
  const results = [];
  return new Promise((res, rej) => {
    fs.createReadStream(csvFilePath)
      .pipe(csvParser())
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
      nrInst: item.nrInst,
      nrAgencia: item.nrAgencia,
      cdClient: item.cdClient,
      nmClient: item.nmClient,
      nrCpfCnpj: item.nrCpfCnpj,
      nrContrato: item.nrContrato,
      cdProduto: item.cdProduto,
      dsProduto: item.dsProduto,
      cdCarteira: item.cdCarteira,
      dsCarteira: item.dsCarteira,
      nrProposta: item.nrProposta,
      idSituac: item.idSituac,
      idSitVen: item.idSitVen,
      qtPrestacoes: item.qtPrestacoes,
      nrPresta: item.nrPresta,
      tpPresta: item.tpPresta,
      nrSeqPre: item.nrSeqPre,
      vlTotal: parseFloat(item.vlTotal),
      vlPresta: parseFloat(item.vlPresta),
      vlMora: parseFloat(item.vlMora),
      vlMulta: parseFloat(item.vlMulta),
      vlOutAcr: parseFloat(item.vlOutAcr),
      vlIof: parseFloat(item.vlIof),
      vlDescon: parseFloat(item.vlDescon),
      vlAtual: parseFloat(item.vlAtual),
      dtContrato: formatDate(item.dtContrato),
      dtVctPre: formatDate(item.dtVctPre),
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
    const actualPath = path.dirname(new URL(import.meta.url).pathname);
    const correctedPath = path.resolve(
      actualPath.startsWith("/") ? actualPath.slice(1) : actualPath
    );
    const csvFilePath = path.join(
      correctedPath,
      "..",
      "upload",
      req.file.filename
    );
    const data = await formateCsvFile(csvFilePath);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing csv file" });
  }
};
