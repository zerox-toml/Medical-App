"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmail } from "../../../redux/counterSlice";

interface MHistoryInputProps {
  content: string;
}

const MHistoryInput: React.FC<MHistoryInputProps> = ({ content }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [isInvalid, setisInvalid] = useState(true); // State to track validation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setValue(emailValue);
    validateEmail(emailValue);
    isInvalid && dispatch(setEmail(emailValue));
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setisInvalid(emailPattern.test(email));
  };

  return (
    <div className="relative w-full mt-[12px]">
      <input
        className={`appearance-none block w-full bg-[#F5F5F5] text-[16px] text-gray-700 pl-4 border-none rounded-[3.75rem] py-[10px] 
          px-[20px] h-[47px] focus:outline-none ${
          isInvalid ? "" : "border-red-500" // Conditional border color based on validation
        }`}
        id="grid-last-name"
        type="text"
        placeholder={content}
        value={value}
        onChange={handleChange}
      />
      {!isInvalid && (
        <p className="text-red-500 text-[12px] mt-[4px]">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default MHistoryInput;
