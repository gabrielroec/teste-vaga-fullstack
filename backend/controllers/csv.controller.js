import csvFileData from "../models/csv.model.js";
import fs from "fs";
import csvParser from "csv-parser";
import path from "path";
import {
  formatDate,
  formatCpfCnpj,
  installmentsConsistencyValidation,
  calculateTax,
} from "../utils/csv.utils.js";

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
    const vlTotalWithTaxs = calculateTax(
      item.dtVctPre,
      parseFloat(item.vlPresta),
      parseFloat(item.vlMora),
      parseFloat(item.vlMulta)
    );
    const expectedPresta = installmentsConsistencyValidation(
      item.vlTotal,
      item.qtPrestacoes,
      vlTotalWithTaxs
    );
    const formattedCsvFile = {
      nrInst: item.nrInst,
      nrAgencia: item.nrAgencia,
      cdClient: item.cdClient,
      nmClient: item.nmClient,
      nrCpfCnpj: formatCpfCnpj(item.nrCpfCnpj),
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
      vlTotal: parseFloat(item.vlTotal).toFixed(2),
      vlPresta: parseFloat(item.vlPresta).toFixed(2),
      vlMora: parseFloat(item.vlMora).toFixed(2),
      vlMulta: parseFloat(item.vlMulta).toFixed(2),
      vlOutAcr: parseFloat(item.vlOutAcr).toFixed(2),
      vlIof: parseFloat(item.vlIof).toFixed(2),
      vlDescon: parseFloat(item.vlDescon).toFixed(2),
      vlAtual: parseFloat(item.vlAtual).toFixed(2),
      expectedPresta,
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

export const getData = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    const data = await csvFileData.find().skip(skip).limit(limit);
    const total = await csvFileData.countDocuments();

    res.json({
      data,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados" });
  }
};
