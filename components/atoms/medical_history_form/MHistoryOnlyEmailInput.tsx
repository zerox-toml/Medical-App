"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterEmail } from "../../../redux/counterSlice";

interface MHistoryInputProps {
  content: string;
  isInvalidRegisteredEmail:boolean;
  setisInvalidRegisteredEmail:(value:any) => void;
}

const MHistoryRegisteredEmailInput: React.FC<MHistoryInputProps> = ({ content, isInvalidRegisteredEmail, setisInvalidRegisteredEmail }) => {
  const dispatch = useDispatch();
  const registerEmail = useSelector((state: any) => state.counter.registerEmail); 
  
  const [value, setValue] = useState(registerEmail ?? "");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setValue(emailValue);
    validateEmail(emailValue);
    isInvalidRegisteredEmail && dispatch(setRegisterEmail(emailValue));
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setisInvalidRegisteredEmail(emailPattern.test(email));
  };

  return (
    <div className="relative w-full mt-[12px]">
      <input
        className={`appearance-none block w-full bg-[#F5F5F5] text-[16px] text-gray-700 pl-4  rounded-[3.75rem] py-[10px] 
          px-[20px] h-[47px] focus:outline-none ${
          isInvalidRegisteredEmail ? "border-none" : "border-alert-red border" // Conditional border color based on validation
        }`}
        id="grid-last-name"
        type="text"
        placeholder={content}
        value={value}
        onChange={handleChange}
      />
      {!isInvalidRegisteredEmail && (
        <p className="text-red-500 text-[12px] mt-[4px]">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default MHistoryRegisteredEmailInput;
