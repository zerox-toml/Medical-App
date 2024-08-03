"use client";
import React, { useState } from "react";
import {
  setRegMedicine,
  setAllergiInfo,
  setChronic,
} from "../../../redux/counterSlice";
import { useDispatch } from "react-redux";

interface MHistoryInputThinProps {
  content: string;
  disabled: boolean;
}

const MHistoryInputThin: React.FC<MHistoryInputThinProps> = ({
  content,
  disabled,
}) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  if (content === "Derzeitige Medikamente") {
    dispatch(setRegMedicine(value));
  } else if (content === "Bekannte Allergien") {
    dispatch(setAllergiInfo(value));
  } else if (content === "Chronische Krankheiten") {
    dispatch(setChronic(value));
  }
  return (
    <div className="relative w-full">
      <input
        className={`multi-select ${
          disabled
            ? "disable-attr appearance-none block w-full bg-[#F5F5F5] text-gray-700 pl-4 border-none text-[16px] rounded-[3.75rem] py-[8px] px-[20px] h-[36px] focus:outline-none"
            : "appearance-none block w-full bg-[#41057E12] text-gray-700 pl-4 border-none text-[16px] rounded-[3.75rem] py-[8px] px-[20px] h-[36px] focus:outline-none"
        }`}
        id="grid-last-name"
        type="text"
        placeholder={content}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default MHistoryInputThin;
