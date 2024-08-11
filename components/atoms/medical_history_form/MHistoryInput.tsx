"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../../redux/counterSlice";

interface MHistoryInputProps {
  content: string;
  isInvalidEmail:boolean;
  setisInvalidEmail:(value:any) => void;
  isInvalid: any
  
}

const MHistoryInput: React.FC<MHistoryInputProps> = ({ content, isInvalidEmail, setisInvalidEmail,isInvalid }) => {
  const dispatch = useDispatch();
  const email = useSelector((state: any) => state.counter.email);
  
  const [value, setValue] = useState(email ?? "");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setValue(emailValue);
    validateEmail(emailValue);
  };
  isInvalidEmail && dispatch(setEmail(value));

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setisInvalidEmail(emailPattern.test(email));
  };
  console.log(isInvalid, "isinvalid");
  
  return (
    <div className="relative w-full mt-[12px]">
      <input
        className={`appearance-none block w-full bg-[#F5F5F5] text-[16px] text-gray-700 pl-4  rounded-[3.75rem] py-[10px] 
          px-[20px] h-[47px] focus:outline-none ${
           !isInvalid && isInvalidEmail ? "border-none" : "border-alert-red border" 
        }`}
        id="grid-last-name"
        type="text"
        placeholder={content}
        value={value}
        onChange={handleChange}
      />
      {!isInvalidEmail && (
        <p className="text-red-500 text-[12px] mt-[4px]">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default MHistoryInput;
