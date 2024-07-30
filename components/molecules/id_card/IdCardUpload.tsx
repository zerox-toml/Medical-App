import React, { useState } from "react";
import Image from "next/image";
import FileUpload from "../../atoms/idCard/IdCardUploadComponent";
import Button from "../../atoms/Button";

const IdCardUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // Handler for file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        if (fileReader.result) {
          setPreview(fileReader.result as string);
        }
      };
      fileReader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  // Optional: Handler for form submission or file upload
  

  return (
    <div className="p-[3.125rem] flex -webkit-flex flex-col gap-3 bg-white rounded-[3.125rem] mt-10 max-md:p-[24px] max-md:rounded-[24px]">
      <strong>Personalausweis</strong>
      <p>
        Bitte laden Sie ein Foto Ihres gültigen Personalausweises oder
        Reisepasses hoch, damit wir Ihr Alter und Ihre persönlichen Daten
        eindeutig verifizieren können.
      </p>

    <FileUpload />  
    </div>
  );
};

export default IdCardUpload;
