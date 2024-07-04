import mongoose from "mongoose";

const csvShema = new mongoose.Schema({
  nrInst: Number,
  nrAgencia: Number,
  cdClient: Number,
  nmClient: String,
  nrCpfCnpj: String,
  nrContrato: Number,
  dtContrato: Date,
  qtPrestacoes: Number,
  vlTotal: Number,
  cdProduto: Number,
  dsProduto: String,
  cdCarteira: Number,
  dsCarteira: String,
  nrProposta: Number,
  nrPresta: Number,
  tpPresta: String,
  nrSeqPre: Number,
  dtVctPre: Date,
  vlPresta: Number,
  vlMora: Number,
  vlMulta: Number,
  vlOutAcr: Number,
  vlIof: Number,
  vlDescon: Number,
  vlAtual: Number,
  idSituac: String,
  idSitVen: String,
  expectedPresta: String,
});

const csvFileData = mongoose.model("csvFileData", csvShema);

export default csvFileData;
