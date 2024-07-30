"use client";

import React, { useEffect, useState } from "react";
import Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import RadiobtnChecked from "../../atoms/medical_history_form/RadiobtnChecked";
import Image from "next/image";
import PInfoCheckboxItem from "../p_information/PInfoCheckboxItem";

interface Props {
  setIsDoctor: (value: boolean) => void;
  isDoctor: boolean;
}
const CPreDoctorQuestion = ({ setIsDoctor, isDoctor }: Props) => {
  const [checked, setChecked] = useState(true);
  const agreeCheck = () => {
    if (checked == true) setChecked(false);
    else setChecked(true);
  };
  return (
    <div className="w-full  h-auto md:rounded-[2.25rem] rounded-[24px] md:p-[3.125rem] p-[24px] bg-white flex -webkit-flex flex-col justify-between mx-auto mt-10 Myshadow">
      <p className=" text-[16px] font-normal">
        Möchten Sie eine eigene Sorte wählen oder soll der Arzt eine passende
        Sorte verschreiben?
        <span className="text-alert-red font-bold">*</span>
      </p>
      <div className="flex -webkit-flex mt-[16px]">
        <RadiobtnChecked
          name="doctor"
          content="Eigene Sorte"
          className="w-[50%]"
          onChange={() => setIsDoctor(false)}
        />
        <Radiobtn
          name="doctor"
          className=""
          content="Arztempfehlung"
          onChange={() => setIsDoctor(true)}
        />
      </div>
      <div className={`multi-select ${!isDoctor ? "hidden" : "flex -webkit-flex flex-col "}`}>
        <div className="flex -webkit-flex items-start bg-[#FFD6001A] py-[10px] px-6 gap-[10px] mt-9">
          <Image
            src={"/Icon/warning.png"}
            alt="warning"
            width={16}
            height={16}
            className="pt-1"
          />
          <p className="text-[#886419] text-base ">
            Der Arzt wird das für Ihre medizinischen Bedürfnisse am besten
            geeignete Medikament verschreiben. Das Team von Privatrezept.net
            wählt anschließend eine Apotheke aus, in der Ihr Medikament
            verfügbar ist.
          </p>
        </div>
        <div className="mt-10">
          <PInfoCheckboxItem
            content={"Ich verstehe und stimme diesen Bedingungen zu"}
            onChange={() => agreeCheck()}
            disabled={false}
            checked={!checked}
            style={{ opacity: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CPreDoctorQuestion;
