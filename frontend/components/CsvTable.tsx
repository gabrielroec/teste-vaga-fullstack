import { FC } from "react";

interface CsvTableProps {
  data: any[];
}

const removeDuplicatedCsvData = (data: any[], keys: string[]) => {
  const seen = new Set();
  return data.filter((item) => {
    const keyValue = keys.map((key) => item[key]).join("-");
    if (seen.has(keyValue)) {
      return false;
    } else {
      seen.add(keyValue);
      return true;
    }
  });
};

const formatCurrency = (value: number) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(value);
};

const CsvTable: FC<CsvTableProps> = ({ data }) => {
  const revisedUniquesCsvDatas = removeDuplicatedCsvData(data, [
    "nrCpfCnpj",
    "nrContrato",
  ]);
  const tableRows = () => {
    return revisedUniquesCsvDatas.map((item, index) => (
      <tr key={index} className="hover:bg-gray-100">
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.nrInst}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.nrAgencia}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.cdClient}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.nmClient}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.nrCpfCnpj}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.nrContrato}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.cdProduto}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.dsProduto}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.cdCarteira}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.dsCarteira}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.nrProposta}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.idSituac}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.idSitVen}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.qtPrestacoes}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.nrPresta}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.tpPresta}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.nrSeqPre}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {formatCurrency(item.vlTotal)}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {formatCurrency(item.vlPresta)}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {formatCurrency(item.vlMora)}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {formatCurrency(item.vlMulta)}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {formatCurrency(item.vlOutAcr)}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {formatCurrency(item.vlIof)}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {formatCurrency(item.vlDescon)}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {formatCurrency(item.vlAtual)}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.expectedPresta}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.dtContrato}
        </td>
        <td className="px-2 text-center py-2 border-b border-gray-200 text-xs">
          {item.dtVctPre}
        </td>
      </tr>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal shadow-md rounded-lg overflow-hidden mt-10">
        <thead className="bg-gray-100 p-4 ">
          <tr>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800 text-xs uppercase font-bold">
              Nr Inst
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800 text-xs uppercase font-bold">
              Nr Agência
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Cd Cliente
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Nome Cliente
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              CPF/CNPJ
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Nr Contrato
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Cd Produto
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Ds Produto
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Cd Carteira
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Ds Carteira
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Nr Proposta
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Id Situação
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Id Situação Venda
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Qtde Prestações
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Nr Prestação
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Tipo Prestação
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Nr Seq Prestação
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Valor Total
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Valor Prestação
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Valor Mora
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Valor Multa
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Valor Outros Acréscimos
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Valor IOF
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Valor Desconto
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Valor Atual
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Prestação Esperada
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Data Contrato
            </th>
            <th className="px-2 text-center py-3 border-b-2 border-gray-200 text-gray-800  text-xs uppercase font-bold">
              Data Vencimento Prestação
            </th>
          </tr>
        </thead>
        <tbody>{tableRows()}</tbody>
      </table>
    </div>
  );
};
export default CsvTable;
