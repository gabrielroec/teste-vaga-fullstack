import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { uploadCsv, fetchCsvData } from "@/app/redux/actions/reduxCsvActions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Terminal } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const UploadCsv: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [messageT, setMessageT] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [variant, setVariant] = useState<string | null>("");
  const [show, setShow] = useState<string | null>("none");
  const [progress, setProgress] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      setVariant("destructive");
      setMessageT("Algo deu errado.");
      setMessage("Certifique-se de que enviou o arquivo correto.");
      setShow("block");
      return;
    }

    setIsLoading(true);
    setMessageT(null);
    setMessage(null);
    setVariant(null);
    setProgress(0);

    try {
      await dispatch(uploadCsv(file));
      setFile(null);
      dispatch(fetchCsvData(1, 50));
      setProgress(100);
      setVariant("");
      setShow("block");
      setMessageT("Arquivo enviado com sucesso!");
      setMessage(
        "Seu arquivo foi enviado com sucesso e está sendo processado na tabela abaixo."
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
          <Input id="csvFile" type="file" onChange={handleFileChange} />
        </div>
        <Button variant="secondary">Enviar</Button>
      </form>
      {isLoading && (
        <Progress
          value={progress}
          className="w-[50%] m-auto relative -top-11"
        />
      )}

      {message && (
        <Alert
          variant={variant}
          className={`w-[50%] m-auto relative -top-10 ${show}`}
        >
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{messageT}</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default UploadCsv;
