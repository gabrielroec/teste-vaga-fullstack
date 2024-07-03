import mongoose from "mongoose";

const csvShema = new mongoose.Schema({
  nrCpfCnpj: String,
  vlTotal: Number,
  vlPresta: Number,
  vlMora: Number,
  vlMovimento: Number,
  vlPago: Number,
  qtPresta: Number,
  qtPrestacoes: Number,
  dtContrato: Number,
  dtVctPre: Number,
});

const csvFileData = mongoose.model("csvFileData", csvShema);

export default csvFileData;
