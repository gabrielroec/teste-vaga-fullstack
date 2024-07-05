"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCsvData } from "./redux/actions/reduxCsvActions";
import UploadCsv from "@/components/CsvUploader";
import CsvTable from "@/components/CsvTable";
import { RootState, AppDispatch } from "./redux/store";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Pagination } from "@/components/Pagination";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, total, pages } = useSelector(
    (state: RootState) => state.csv
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    dispatch(fetchCsvData(currentPage, limit));
  }, [dispatch, currentPage, limit]);

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleLimit = (newValue: string | number) => {
    setLimit(parseInt(newValue as string, 10));
    setCurrentPage(1);
  };

  return (
    <div className="px-10">
      <UploadCsv />
      <Label>Items por página</Label>
      <Select value={limit.toString()} onValueChange={handleLimit}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Items per page" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="50">10</SelectItem>
            <SelectItem value="100">20</SelectItem>
            <SelectItem value="143">30</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {loading && <p>Carregando</p>}
      {error && <p>Error: {error}</p>}
      {data && <CsvTable data={data} />}

      <Pagination
        currentPage={currentPage}
        pages={pages}
        onPageChange={handlePage}
      />
    </div>
  );
};
export default Page;
