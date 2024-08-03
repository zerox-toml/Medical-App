import React, { useState, ChangeEvent, DragEvent } from "react";
import Image from "next/image";

import { useDispatch } from "react-redux";
import { setIdCardFile } from "../../../redux/counterSlice";

const FileUpload: React.FC = () => {

  const dispatch = useDispatch()

  const [files, setFiles] = useState<File[]>([]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [droppingIndex, setDroppingIndex] = useState<number | null>(null);

  const humanFileSize = (size: number): string => {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    const sizeInUnits = size / Math.pow(1024, i);
    return sizeInUnits.toFixed(2) + " " + ["B", "kB", "MB", "GB", "TB"][i];
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);

      // for now /order request needs one file, so save first file on redux store
      dispatch(setIdCardFile(newFiles[0]))
    }
  };

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const handleDragEnter = (index: number) => {
    setDroppingIndex(index);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
    setDroppingIndex(null);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (draggingIndex !== null && droppingIndex !== null) {
      const updatedFiles = [...files];
      const [movedFile] = updatedFiles.splice(draggingIndex, 1);
      updatedFiles.splice(droppingIndex, 0, movedFile);
      setFiles(updatedFiles);
    }
    handleDragEnd();
  };

  return (
    <div className="bg-[#F5F5F5] p-7 rounded-[20px] w-full mx-auto">
      <div className="relative flex -webkit-flex flex-col text-gray-400  rounded">
        <div
          className="relative flex -webkit-flex flex-col text-gray-400  rounded cursor-pointer"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            className="absolute inset-0 z-50 text-[16px] w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
          <div className="flex -webkit-flex 360px:flex-row flex-col items-center justify-center py-10 text-center gap-6">
            <div className="sm:block hidden">
              <Image
                src={"/Icon/upload.png"}
                width={48}
                height={48}
                alt="upload"
                className="w-20 h-12"
              />
            </div>
            <div className="sm:hidden block">
              <Image
                src={"/Icon/upload_sp.png"}
                width={30}
                height={40}
                alt="upload"
              />
            </div>
            <div>
              <p className="font-bold">Dateien durchsuchen</p>
              <p className="m-0">Drag and drop files here</p>
            </div>
          </div>
        </div>
        {files.length > 0 && (
          <div className="grid max-[]:grid-cols-1 gap-2 mt-4 grid-cols-4 mx-auto">
            {files.map((file, index) => (
              <div
                key={index}
                className={`relative flex -webkit-flex flex-col items-center h-36 w-36 overflow-hidden text-center bg-gray-100 border rounded cursor-move select-none ${draggingIndex === index ? "border-blue-600" : ""
                  }`}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragEnter={() => handleDragEnter(index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => e.preventDefault()}
              >
                <button
                  className="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
                  type="button"
                  onClick={() => removeFile(index)}
                >
                  <svg
                    className="w-4 h-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
                {file.type.includes("image/") && (
                  <Image
                    className="absolute inset-0 z-0 object-cover w-full h-full border-4 border-white"
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    onLoad={() =>
                      URL.revokeObjectURL(URL.createObjectURL(file))
                    }
                    width={64}
                    height={64}
                  />
                )}
                {file.type.includes("video/") && (
                  <video
                    className="absolute inset-0 object-cover w-full h-full border-4 border-white"
                    controls
                  >
                    <source src={URL.createObjectURL(file)} type={file.type} />
                  </video>
                )}
                <div className="absolute bottom-0 left-0 right-0 flex -webkit-flex flex-col p-2 text-xs bg-white bg-opacity-50">
                  <span className="w-full font-bold text-gray-900 truncate">
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-900">
                    {humanFileSize(file.size)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
