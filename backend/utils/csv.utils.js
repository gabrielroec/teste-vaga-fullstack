const formatCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

const formatCnpj = (cnpj) => {
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
};

export const formatCpfCnpj = (nrCpfCnpj) => {
  const clear = nrCpfCnpj.replace(/\D/g, "");
  if (clear.length === 11) {
    return formatCpf(clear);
  } else if (clear.length === 14) {
    return formatCnpj(clear);
  } else {
    const cpfCnpjDesconhecido = `${nrCpfCnpj} - Cpf ou Cnpf desconhecido ou em formato inválido`;
    return cpfCnpjDesconhecido;
  }
};

export const formatDate = (date) => {
  if (/^\d{8}$/.test(date)) {
    const year = parseInt(date.substring(0, 4), 10);
    const month = parseInt(date.substring(4, 6), 10) - 1;
    const day = parseInt(date.substring(6), 10);

    return new Date(year, month, day);
  }
  return null;
};

export const calculateTax = (dtVctPre, vlPresta, vlMora, vlMulta) => {
  const dueDate = formatDate(dtVctPre);
  const paymentDate = dueDate;
  //   console.log("Data de Vencimento:", dueDate);
  //   console.log("Data de Pagamento assumida como padrão:", paymentDate);

  return parseFloat(vlPresta).toFixed(2);
};

export const installmentsConsistencyValidation = (
  vlTotal,
  qtPrestacoes,
  vlTotalWithTaxs
) => {
  const expectedValue = parseFloat((vlTotal / qtPrestacoes).toFixed(2));
  const realPresta = parseFloat(vlTotalWithTaxs).toFixed(2);

  if (expectedValue === realPresta) {
    return `${expectedValue} Consistente`;
  } else {
    return `${expectedValue} Não Consistente`;
  }
};
