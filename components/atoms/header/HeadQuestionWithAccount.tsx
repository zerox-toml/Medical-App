"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface Props {
  isStep: number;
  setIsStep: (value: number) => void;
  setIsProductStep: (value: number) => void;
}
const HeadQuestionWithAccount = ({ isStep, setIsStep, setIsProductStep }: Props) => {
  return (
    <div className=" bg-[rgba(243,243,243)] ">
      <div className="flex -webkit-flex md:gap-[4.375rem] 360px:gap-[40px] gap-[20px] w-full justify-center max-w-[920px]  items-center pt-[70px] m-auto xl:max-w-screen-xl 
      lg:max-w-screen-lg lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm px-[16px]">
        <div
          className=""
          onClick={() => {
            if (isStep == 0) {
              setIsStep(0);
            } else {
              setIsStep(isStep - 1);
              setIsProductStep(0)
            }
          }}
        >
          <FaArrowLeft
            color="#41057E"
            className="cursor-pointer md:text-[35px] sm:text-[30px] text-[16px]"
          />
        </div>

        <div className="flex">
          <div className="w-4 h-4 bg-custom-purple rounded-full"></div>
          <div
            className={`border-t-2 border-dotted w-[30px] min-[450px]:w-[60px] 360px:w-[40px] sm:w-[5rem] lg:w-[10rem] md:w-[7rem] mt-2 ${
              isStep >= 1 ? "border-custom-purple" : "border-[#41057E12]"
            }`}
          ></div>
          <div
            className={`w-4 h-4 rounded-full ${
              isStep >= 1 ? "bg-custom-purple" : "bg-[#41057E12]"
            }`}
          ></div>
          <div
            className={`border-t-2 border-dotted w-[30px] min-[450px]:w-[60px] 360px:w-[40px] sm:w-[5rem] lg:w-[10rem] md:w-[7rem] mt-2 ${
              isStep >= 2 ? "border-custom-purple" : "border-[#41057E12]"
            }`}
          ></div>
          <div
            className={`w-4 h-4 rounded-full ${
              isStep >= 2 ? "bg-custom-purple" : "bg-[#41057E12]"
            }`}
          ></div>
          <div
            className={`border-t-2 border-dotted w-[30px] min-[450px]:w-[60px] 360px:w-[40px] sm:w-[5rem] lg:w-[10rem] md:w-[7rem] mt-2 ${
              isStep >= 3 ? "border-custom-purple" : "border-[#41057E12]"
            }`}
          ></div>
          <div
            className={`w-4 h-4 rounded-full ${
              isStep >= 3 ? "bg-custom-purple" : "bg-[#41057E12]"
            }`}
          ></div>
          <div
            className={`border-t-2 border-dotted w-[30px] min-[450px]:w-[60px] 360px:w-[40px] sm:w-[5rem] lg:w-[10rem] md:w-[7rem] mt-2 ${
              isStep >= 4 ? "border-custom-purple" : "border-[#41057E12]"
            }`}
          ></div>
          <div
            className={`w-4 h-4 rounded-full ${
              isStep >= 4 ? "bg-custom-purple" : "bg-[#41057E12]"
            }`}
          ></div>
        </div>
        <FaArrowRight
          color="#41057E12"
          className="cursor-pointer md:text-[35px] sm:text-[30px] text-[16px]"
        />
      </div>
    </div>
  );
};

export default HeadQuestionWithAccount;
