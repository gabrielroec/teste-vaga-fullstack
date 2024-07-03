import csvFileData from "../models/csv.model.js";

export const uploadCsvFile = async (req, res) => {
  const {
    nrCpfCnpj,
    vlTotal,
    vlPresta,
    vlMora,
    vlMovimento,
    vlPago,
    qtPresta,
    qtPrestacoes,
    dtContrato,
    dtVctPre,
  } = req.body;

  try {
    const newRecivedData = new csvFileData({
      nrCpfCnpj,
      vlTotal,
      vlPresta,
      vlMora,
      vlMovimento,
      vlPago,
      qtPresta,
      qtPrestacoes,
      dtContrato,
      dtVctPre,
    });

    const savedData = await newRecivedData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
