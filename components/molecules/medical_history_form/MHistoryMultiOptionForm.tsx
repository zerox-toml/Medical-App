"use client";

import React, { useEffect, useState } from "react";
import Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import RadiobtnChecked from "../../atoms/medical_history_form/RadiobtnChecked";
import MHistoryInputThin from "../../atoms/medical_history_form/MHistoryInputThin";
import {
  setIsTherapy,
  setGInsurance,
  setgHaveAllergy,
  setgDoctorLamaCheck,
  setgHaveIllness,
  setgAlwaysGetMedicine,
  setValidationErrors,
} from "../../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import MHistoryNoRemoteAlert from "../../atoms/medical_history_form/MHistoryNoRemoteAlert";

interface IMHistoryMultiOptionForm {
  disabled: boolean;
}

const MHistoryMultiOptionForm: React.FC<IMHistoryMultiOptionForm> = ({
  disabled,
}) => {
  const dispatch = useDispatch();
  const validationErrors = useSelector((state: any) => state.counter.validationErrors);
  const [isInsurance, setIsInsurance] = useState(3);
  const [isDoctorCheck, setIsDoctorCheck] = useState(3);
  const [currentDisplay, setCurrentDisplay] = useState(3);
  const [isAllergy, setIsAllergy] = useState(3);
  const [isillnesses, setIsillnesses] = useState(3);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isAllergyDisabled, setIsAllergyDisabled] = useState(true);
  const [isillnessesDisabled, setIsillnessesDisabled] = useState(true);
  const gInsurance = useSelector((state: any) => state.counter.gInsurance);
  const gHaveAllergy = useSelector((state: any) => state.counter.gHaveAllergy);
  const gDoctorLamaCheck = useSelector((state: any) => state.counter.gDoctorLamaCheck);
  const gHaveIllness = useSelector((state: any) => state.counter.gHaveIllness);
  const gAlwaysGetMedicine = useSelector((state: any) => state.counter.gAlwaysGetMedicine);
  useEffect(() => {
    dispatch(setIsTherapy(isDoctorCheck));
  }, [isDoctorCheck, dispatch]);

  useEffect(() => {
    if (isInsurance === 0) {
      dispatch(setGInsurance("Ich bin Selbstzahler"));
    } else if (isInsurance === 1) {
      dispatch(setGInsurance("Ich bin privat versichert"));
    } else {
      dispatch(setGInsurance(null));
    }
  }, [isInsurance, dispatch]);

  useEffect(() => {
    if (currentDisplay == 1) {
      setIsInputDisabled(false);
      dispatch(setgAlwaysGetMedicine(1));
    } else if (currentDisplay == 0) {
      setIsInputDisabled(true);
      dispatch(setgAlwaysGetMedicine(1));
    } else {
      dispatch(setgAlwaysGetMedicine(null));
    }
  }, [currentDisplay, dispatch]);

  useEffect(() => {
    if (isAllergy == 1) {
      setIsAllergyDisabled(false);
      dispatch(setgHaveAllergy(1));
    } else if (isAllergy == 0) {
      setIsAllergyDisabled(true);
      dispatch(setgHaveAllergy(1));
    } else {
      dispatch(setgHaveAllergy(null));
    }
  }, [isAllergy, dispatch]);

  useEffect(() => {
    if (isillnesses == 1) {
      setIsillnessesDisabled(false);
      dispatch(setgHaveIllness(1));
    } else if (isillnesses == 0) {
      setIsillnessesDisabled(true);
      dispatch(setgHaveIllness(2));
    } else {
      dispatch(setgHaveIllness(null));
    }
  }, [isillnesses, dispatch]);

  useEffect(() => {
    if (isDoctorCheck == 1) {
      setgHaveIllness(false);
      dispatch(setgDoctorLamaCheck(1));
    } else if (isDoctorCheck == 0) {
      setgHaveIllness(true);
      dispatch(setgDoctorLamaCheck(1));
    } else if (isDoctorCheck == 2) {
      dispatch(setgDoctorLamaCheck(1));
    } else {
      dispatch(setgDoctorLamaCheck(null));
    }
  }, [isDoctorCheck, dispatch]);

  return (
    <div
      className={`multi-select ${
        disabled
          ? "disable-attr w-full flex -webkit-flex flex-col justify-start items-start mt-[20px] bg-white md:p-[3.125rem] p-[24px] md:rounded-[36px] rounded-[24px] Myshadow"
          : "w-full flex -webkit-flex flex-col justify-start items-start mt-[20px] bg-white md:p-[3.125rem] p-[24px] md:rounded-[36px] rounded-[24px] Myshadow"
      }`}
    >
      <span className={` ${(validationErrors?.gAlwaysGetMedicine) && gAlwaysGetMedicine == null?"text-alert-red":""} text-[16px] font-normal w-full`}>
        Nehmen Sie regelmäßig Medikamente ein?
      </span>
      <div className="mt-[16px] flex -webkit-flex w-full items-center gap-5 justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px] max-[650px]:flex-col">
        <Radiobtn
          name="medication"
          className=" w-[100%]"
          content="Nein"
          onChange={() => setCurrentDisplay(0)}
        />
        <div className="sm:flex-row flex-col sm:gap-[24px] gap-4 flex -webkit-flex sm:items-center items-start w-full">
          <Radiobtn
            name="medication"
            className=""
            content="Ja"
            onChange={() => setCurrentDisplay(1)}
          />
          <MHistoryInputThin
            content="Derzeitige Medikamente"
            disabled={isInputDisabled} // Pass disabled prop
          />
        </div>
      </div>
      <span className={` ${(validationErrors?.gHaveAllergy) && gHaveAllergy == null?"text-alert-red":""} text-[16px] font-normal w-full`}>

        Sind bei Ihnen Allergien bekannt? Falls ja, bitte detalierte Angaben
        machen
      </span>
      <div className="mt-[16px] max-[650px]:flex-col flex -webkit-flex w-full gap-5 items-center justify-between ">
        <Radiobtn
          name="allergies"
          className=" w-[100%]"
          content="Nein"
          onChange={() => setIsAllergy(0)}
        />
        <div className="sm:flex-row flex-col sm:gap-[24px] gap-4 w-full flex -webkit-flex sm:items-center items-start">
          <Radiobtn
            name="allergies"
            className=""
            content="Ja"
            onChange={() => setIsAllergy(1)}
          />
          <MHistoryInputThin
            content="Bekannte Allergien"
            disabled={isAllergyDisabled}
          />
        </div>
      </div>
      <span className={` ${(validationErrors?.gDoctorLamaCheck) && gDoctorLamaCheck == null?"text-alert-red":""} text-[16px] font-normal w-full`}>

        Sind Ihre Allergologen darüber informiert, dass Sie eine Therapie mit
        medizinischem Cannabis beginnen möchten, und sehen Ihre Ärzte keine
        Kontraindikationen?
      </span>
      <div className=" mt-[16px] flex -webkit-flex w-full items-start justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px] max-sm:flex-col max-sm:items-start gap-5">
        <div className="w-1/3 flex -webkit-flex items-center">
          <Radiobtn
            name="allergists"
            className=""
            content="Nein"
            onChange={() => setIsDoctorCheck(0)}
          />
        </div>
        <div className="flex -webkit-flex flex-col sm:w-1/3 w-full items-start justify-center">
          <Radiobtn
            name="allergists"
            className=""
            content="Ja"
            onChange={() => setIsDoctorCheck(1)}
          />
          <div
            className={`multi-select ${
              isDoctorCheck === 1
                ? "py-[10px] px-6 bg-[#D7000D08]  w-full rounded-[20px] mr-0 ml-auto flex -webkit-flex justify-end items-center mt-4"
                : "hidden"
            }`}
          >
            <MHistoryNoRemoteAlert />
          </div>
        </div>
        <div className="sm:w-1/3 w-full flex -webkit-flex flex-col items-start justify-center">
          <Radiobtn
            name="allergists"
            className="w-auto max-[650px]:w-full max-[650px]:items-start"
            content="Ich habe noch nicht mit meinen Ärzten darüber gesprochen."
            onChange={() => setIsDoctorCheck(2)}
          />
          <div
            className={`multi-select ${
              isDoctorCheck === 2
                ? "py-[10px] px-6 bg-[#D7000D08] sm:w-[240px] w-full rounded-[20px] mr-0 ml-auto flex -webkit-flex justify-end items-center mt-4"
                : "hidden"
            }`}
          >
            <MHistoryNoRemoteAlert />
          </div>
        </div>
      </div>
      <span className={` ${(validationErrors?.gHaveIllness) && gHaveIllness == null?"text-alert-red":""} text-[16px] font-normal w-full`}>

        Leiden Sie an chronischen Krankheiten, einschließlich psychischer
        Erkrankungen?
      </span>
      <div className=" mt-[16px] flex -webkit-flex w-full items-center gap-5  justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px] max-[650px]:flex-col">
        <Radiobtn
          name="chronic "
          className=" w-[100%]"
          content="Nein"
          onChange={() => setIsillnesses(0)}
        />
        <div className="sm:flex-row flex-col sm:gap-[24px] gap-4 flex -webkit-flex sm:items-center items-start justify-start w-full">
          <Radiobtn
            name="chronic "
            className=""
            content="Ja"
            onChange={() => setIsillnesses(1)}
          />
          <MHistoryInputThin
            content="Chronische Krankheiten"
            disabled={isillnessesDisabled}
          />
        </div>
      </div>
      <span className={` ${(validationErrors?.gInsurance) && gInsurance == null?"text-alert-red":""} text-[16px] font-normal w-full`}>

        Zahlen Sie selbst oder sind Sie privat versichert?
      </span>
      <div className=" mt-[16px] flex -webkit-flex w-full items-center justify-start max-[650px]:flex-col max-[650px]:items-start gap-5 ">
        <Radiobtn
          name="pay "
          className=" w-[50%]"
          content="Ich bin Selbstzahler"
          onChange={() => setIsInsurance(0)}
        />
        <Radiobtn
          name="pay "
          className=""
          content="Ich bin privat versichert"
          onChange={() => setIsInsurance(1)}
        />
      </div>
    </div>
  );
};

export default MHistoryMultiOptionForm;
