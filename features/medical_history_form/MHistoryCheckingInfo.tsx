"use client";
import React, { useEffect, useState } from "react";
import MHistoryInput from "../../components/atoms/medical_history_form/MHistoryInput";
import MHistoryName from "../../components/atoms/medical_history_form/MHistoryName";
import MHistroyHerr from "../../components/atoms/medical_history_form/MHistroyHerr";
import MHistoryDate from "../../components/atoms/medical_history_form/MHistoryDate";
import { connect } from "react-redux";
import {
  setFname,
  setLname,
  setTphone,
  setValidationErrors,
} from "../../redux/counterSlice";

interface IMHistoryCheckingInfo {
  disabled: boolean;
  setFname: any;
  setLname: any;
  setTphone: any;
  fname: string;
  lname: string;
  tphone: string;
  validationErrors: any;
  setValidationErrors: any;
  isInvalidEmail:boolean;
  setisInvalidEmail:(value:any) => void;
}

const MHistoryCheckingInfo: React.FC<IMHistoryCheckingInfo> = ({
  disabled,
  setFname,
  setLname,
  setTphone,
  fname,
  lname,
  tphone,
  validationErrors,
  setValidationErrors,
  isInvalidEmail,
  setisInvalidEmail,
}) => {
  const [vorname, setVorname] = useState(fname ?? "");
  const handleSetVorname = (value: any) => {
    setVorname(value);
    setFname(value);
  };
  const handleSetNachname = (value: any) => {
    setNachname(value);
    setLname(value);
  };

  const handleSetTelefon = (value: any) => {
    setTelefon(value);
    setTphone(value);
  };

  const [nachname, setNachname] = useState(lname ?? "");
  const [telefon, setTelefon] = useState(tphone ?? "");

  useEffect(() => {
  },[validationErrors])
  return (
    <div
      className={`multi-select ${
        disabled
           ? "disable-attr bg-white h-auto w-full md:rounded-[2.25rem] rounded-[24px] md:p-[3.125rem] p-[24px] gap-[2.4rem] mt-[20px] Myshadow"
          : "bg-white h-auto rounded-[2.25rem]  md:p-[3.125rem] p-[24px] gap-[2.4rem] mt-[20px] Myshadow"
      }`}
    >
      <h2 className=" font-extrabold text-[20px] md:mb-[24px] mb-4">
        Deine Kontaktdaten
      </h2>
      <div className="flex -webkit-flex flex-col gap-4 w-full">
        <MHistoryInput content="E-mail" isInvalidEmail = {isInvalidEmail} setisInvalidEmail={setisInvalidEmail}/>
        <div className="flex -webkit-flex flex-wrap items-start justify-start gap-4 w-full max-[650px]:flex-nowrap max-[650px]:flex-col  ">
          <MHistroyHerr
            optionInfo="Herr"
            option={["Herr", "Frau", "Keine Angabe"]}
          />
          <MHistoryName
            name="Vorname"
            value={vorname}
            isInvalid={validationErrors?.fname}
            setValue={handleSetVorname}
          />
          <MHistoryName
            name="Nachname"
            value={nachname}
            isInvalid={validationErrors?.lname}
            setValue={handleSetNachname}
          />
          <MHistroyHerr
            optionInfo="Geschlecht"
            option={["Männlich", "Weiblich", "Bevorzusage, nicht zu sagen"]}
          />
          <MHistoryDate/>
          <MHistoryName
            name="Telefonnummer"
            value={telefon}
            isInvalid={validationErrors?.tphone}
            setValue={handleSetTelefon}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  fname: state.counter.fname,
  lname: state.counter.lname,
  tphone: state.counter.tphone,
  validationErrors: state.counter.validationErrors,
});
const mapDispatchToProps = {
  setFname,
  setLname,
  setTphone,
  setValidationErrors,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MHistoryCheckingInfo);
