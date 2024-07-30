"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmail } from "../../../redux/counterSlice";

interface InputDefaultProps {
  content?: string;
  inputContent?: string;
  setInputContent: (value: any) => void;
  onChange?: (value: any) => void;
  className?: string; 
}

const InputDefault: React.FC<InputDefaultProps> = ({
  content,
  inputContent,
  onChange,
  setInputContent,
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputContent = e.target.value;
    setInputContent(inputContent);
  };

  return (
    <div className={`${className} relative h-auto`}>
      <input
        className={` appearance-none block w-full bg-[#F5F5F5] text-gray-700 pl-4 !border-none text-[16px]
            rounded-[3.75rem] py-[10px] px-[20px] h-[47px] focus:outline-none focus:ring-0 focus:border-transparent}`}
        type="text"
        placeholder={content}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputDefault;
