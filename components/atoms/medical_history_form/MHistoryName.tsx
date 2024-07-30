"use client";
import React from "react";

interface IUserName {
  name: string;
  value: string;
  isInvalid?: boolean;
  setValue: (value: any) => void;
}

const MHistoryName: React.FC<IUserName> = ({
  name,
  value,
  setValue,
  isInvalid,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
    
  return (
    <div className="relative sm:w-[16.8rem] 360px:w-[310px] w-full">
      <input
        className={`appearance-none w-full bg-[#F5F5F5] text-gray-700 border-none text-[16px] h-[47px] rounded-[3.75rem] py-[10px] px-[20px] pl-4 focus:outline-none flex -webkit-flex justify-center items-center ${(!value && isInvalid) && "!border-[1px] !border-red-500 !border-solid"}`}
        id="grid-last-name"
        type="text"
        value={value}
        onChange={handleChange}
      />
      {!value && (
        <span className="absolute top-[13px] left-4 text-gray-400 pointer-events-none text-[14px]">
          {name}
          <span className="text-red-500">*</span>
        </span>
      )}
    </div>
  );
};

export default MHistoryName;
