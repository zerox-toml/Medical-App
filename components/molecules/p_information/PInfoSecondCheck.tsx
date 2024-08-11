import React from "react";
import Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import RadiobtnChecked from "../../atoms/medical_history_form/RadiobtnChecked";
import MHistoryNoRemoteAlert from "../../atoms/medical_history_form/MHistoryNoRemoteAlert";

interface IPInfoFirst {
  setPISecond: (value: any) => void;
  pISecond: any;
}

const PInfoSecondCheck: React.FC<IPInfoFirst> = ({ setPISecond, pISecond }) => {
  return (
    <div className="w-full h-auto bg-white flex -webkit-flex mt-9 flex-col justify-between mx-auto border-b border-solid border-[#00000012]">
      <p className=" text-[16px] font-normal">
        Verstehen Sie, dass Sie immer medizinisches Personal darüber informieren
        müssen, dass Sie medizinisches Cannabis verwenden, einschließlich vor
        chirurgischen Eingriffen, Anästhesien und bildgebenden Untersuchungen
        (z. B. Kontrastmittel-CT), und dass Sie bei dem Kauf von rezeptfreien
        Medikamenten nachfragen müssen, ob es zu Wechselwirkungen mit Cannabis
        kommen kann?
      </p>
      <div className="flex -webkit-flex mt-[16px]  mb-5">
        <Radiobtn
          name="acc2"
          content="Ja"
          className="w-[50%]"
          onChange={() => setPISecond(true)}
        />
        <Radiobtn
          name="acc2"
          className=""
          content="Nein"
          onChange={() => setPISecond(false)}
        />
      </div>
      <div
        className={` ${pISecond === false
          ? "py-[10px] px-6 bg-[#D7000D08] sm:w-[360px] w-full rounded-[20px] mr-0 ml-auto flex -webkit-flex justify-end items-center mb-4"
          : "hidden"
          }`}
      >
        <MHistoryNoRemoteAlert />
      </div>
      <div></div>
    </div>
  );
};

export default PInfoSecondCheck;
