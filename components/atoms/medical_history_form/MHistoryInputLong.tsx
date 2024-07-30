"use client";
import React, { useState } from "react";
import { setDetailedSymptom } from "../../../redux/counterSlice";
import { useDispatch } from "react-redux";

interface IUserName {
  value: string;
  isInvalid?: boolean;
  setValue: (value: any) => void;
}

const MHistoryDetailSymptom: React.FC<IUserName> = ({
  value,
  setValue,
  isInvalid,
}) => {
  
  // const [deSymptom, setDeSymptom] = useState("");
  // const dispatch = useDispatch();
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  //   setDeSymptom(e.target.value);
  //   dispatch(setDetailedSymptom(deSymptom));
  // };

  return (
    <div className="w-full mt-[24px]">
      <input
        className={`appearance-none !flex !justify-start !items-center w-full bg-[#F5F5F5] text-gray-700 pl-4 border-none text-[14px] 
          rounded-[16px] py-[10px] px-[20px] pb-[100px] focus:outline-none ${(!value && isInvalid) && "!border-[1px] !border-red-500 !border-solid"}`}
        type="text"
        placeholder="Ihre Nachricht"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default MHistoryDetailSymptom;
