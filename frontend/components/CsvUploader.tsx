import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { uploadCsv, fetchCsvData } from "@/app/redux/actions/reduxCsvActions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const UploadCsv: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    try {
      await dispatch(uploadCsv(file));
      setFile(null);
      dispatch(fetchCsvData(1, 50));
      console.log("ENVIADO");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-end gap-2 justify-center
        my-20"
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="csvFile">Selecione o seu arquivo Csv</Label>
          <Input id="csvFile" type="file" />
        </div>
        <Button variant="secondary">Enviar</Button>
      </form>
    </div>
  );
};

export default UploadCsv;
