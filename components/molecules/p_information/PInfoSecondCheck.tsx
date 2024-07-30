import React from "react";
import  Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import  RadiobtnChecked  from "../../atoms/medical_history_form/RadiobtnChecked";

interface IPInfoFirst {
  setPISecond: (value: boolean) => void;
  pISecond: boolean;
}

const PInfoSecondCheck: React.FC<IPInfoFirst> = ({ setPISecond, pISecond }) => {
  return (
    <div className="w-full h-auto bg-white flex mt-9 flex-col justify-between mx-auto border-b border-solid border-[#00000012]">
      <p className=" text-[16px] font-normal">
        Verstehen Sie, dass Sie immer medizinisches Personal darüber informieren
        müssen, dass Sie medizinisches Cannabis verwenden, einschließlich vor
        chirurgischen Eingriffen, Anästhesien und bildgebenden Untersuchungen
        (z. B. Kontrastmittel-CT), und dass Sie bei dem Kauf von rezeptfreien
        Medikamenten nachfragen müssen, ob es zu Wechselwirkungen mit Cannabis
        kommen kann?
      </p>
      <div className="flex mt-[16px]  mb-5">
        <Radiobtn
          name="acc2"
          content="Ja"
          className="w-[50%]"
          onChange={() => setPISecond(true)}
        />
        <RadiobtnChecked
          name="acc2"
          className=""
          content="Nein"
          onChange={() => setPISecond(false)}
        />
      </div>
      <div></div>
    </div>
  );
};

export default PInfoSecondCheck;
