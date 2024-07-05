import { FC } from "react";

interface CsvTableProps {
  data: any[];
}

const CsvTable: FC<CsvTableProps> = ({ data }) => {
  const tableRows = () => {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.nrInst}</td>
        <td>{item.nrAgencia}</td>
        <td>{item.cdClient}</td>
        <td>{item.nmClient}</td>
        <td>{item.nrCpfCnpj}</td>
        <td>{item.nrContrato}</td>
        <td>{item.cdProduto}</td>
        <td>{item.dsProduto}</td>
        <td>{item.cdCarteira}</td>
        <td>{item.dsCarteira}</td>
        <td>{item.nrProposta}</td>
        <td>{item.idSituac}</td>
        <td>{item.idSitVen}</td>
        <td>{item.qtPrestacoes}</td>
        <td>{item.nrPresta}</td>
        <td>{item.tpPresta}</td>
        <td>{item.nrSeqPre}</td>
        <td>{item.vlTotal}</td>
        <td>{item.vlPresta}</td>
        <td>{item.vlMora}</td>
        <td>{item.vlMulta}</td>
        <td>{item.vlOutAcr}</td>
        <td>{item.vlIof}</td>
        <td>{item.vlDescon}</td>
        <td>{item.vlAtual}</td>
        <td>{item.expectedPresta}</td>
        <td>{item.dtContrato}</td>
        <td>{item.dtVctPre}</td>
      </tr>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nr Inst</th>
          <th>Nr Agência</th>
          <th>Cd Cliente</th>
          <th>Nome Cliente</th>
          <th>CPF/CNPJ</th>
          <th>Nr Contrato</th>
          <th>Cd Produto</th>
          <th>Ds Produto</th>
          <th>Cd Carteira</th>
          <th>Ds Carteira</th>
          <th>Nr Proposta</th>
          <th>Id Situação</th>
          <th>Id Situação Venda</th>
          <th>Qtde Prestações</th>
          <th>Nr Prestação</th>
          <th>Tipo Prestação</th>
          <th>Nr Seq Prestação</th>
          <th>Valor Total</th>
          <th>Valor Prestação</th>
          <th>Valor Mora</th>
          <th>Valor Multa</th>
          <th>Valor Outros Acréscimos</th>
          <th>Valor IOF</th>
          <th>Valor Desconto</th>
          <th>Valor Atual</th>
          <th>Prestação Esperada</th>
          <th>Data Contrato</th>
          <th>Data Vencimento Prestação</th>
        </tr>
      </thead>
      <tbody>{tableRows()}</tbody>
    </table>
  );
};
export default CsvTable;
