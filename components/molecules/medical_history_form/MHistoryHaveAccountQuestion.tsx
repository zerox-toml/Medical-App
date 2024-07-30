"use client";

import React, { useEffect, useState } from "react";
import Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import RadiobtnChecked  from "../../atoms/medical_history_form/RadiobtnChecked";
import MHistoryInput from "../../atoms/medical_history_form/MHistoryInput";
import Button from "../../atoms/Button";

interface Props {
  setIsOne: (value: boolean) => void;
  isOne: boolean;
}
const MHistoryHaveAccountQuestion = ({ setIsOne, isOne }: Props) => {
  useEffect(() => {
    
  }, [isOne])
  const [isSend, setIsSend] = useState();
  return (
    <div className="w-full h-auto md:rounded-[2.25rem] rounded-[24px] md:p-[3.125rem] p-[24px] bg-white flex flex-col justify-between mx-auto mt-[40px] Myshadow">
      <p className=" text-[16px] font-normal">
        Haben Sie bereits ein Konto?
        <span className="text-alert-red font-bold">*</span>
      </p>
      <div className="flex mt-[16px]">
        <Radiobtn
          name="acc1"
          content="Ja"
          className="w-[50%]"
          onChange={() => setIsOne(true)}
        />
        <RadiobtnChecked
          name="acc1"
          className=""
          content="Nein"
          onChange={() => setIsOne(false)}
        />
        
      </div>
      <div
        className={`multi-select ${
          isOne ? "flex flex-col mt-[24px]" : "hidden flex-col"
        }`}
      >
        <p>
          Geben Sie Ihre E-Mail-Adresse ein und erhalten Sie den Link zu einem
          vorausgefüllten Fragebogen.
        </p>
        <div className="flex justify-between items-center gap-3 md:flex-row flex-col">
          <MHistoryInput content="E-mail" />
          <Button
            content="senden"
            onClick={setIsOne}
            className="md:w-[139px] w-full mt-[12px] bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)] rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default MHistoryHaveAccountQuestion;
