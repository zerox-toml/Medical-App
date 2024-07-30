"use client";

import React, { useEffect, useState } from "react";
import Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import RadiobtnChecked from "../../atoms/medical_history_form/RadiobtnChecked";
import Image from "next/image";
import PInfoCheckboxItem from "../p_information/PInfoCheckboxItem";

interface Props {
  setIsDominaz: (value: boolean) => void;
  isDominaz: boolean;
}
const CpreDominaz = ({ setIsDominaz, isDominaz }: Props) => {
 
  return (
    <div className="w-full h-auto  px-[24px] bg-white flex flex-col justify-between mx-auto">
      <p className=" text-[16px] font-normal">Dominanz</p>
      <div className="flex mt-3">
        <RadiobtnChecked
          name="doctor"
          content="Indica"
          className="w-[50%]"
          onChange={() => setIsDominaz(true)}
        />
        <Radiobtn
          name="doctor"
          className=""
          content="Sativa"
          onChange={() => setIsDominaz(false)}
        />
      </div>
    </div>
  );
};

export default CpreDominaz;
