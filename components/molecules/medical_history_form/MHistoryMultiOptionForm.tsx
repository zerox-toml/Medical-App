"use client";

import React, { useEffect, useState } from "react";
import Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import RadiobtnChecked from "../../atoms/medical_history_form/RadiobtnChecked";
import MHistoryInputThin from "../../atoms/medical_history_form/MHistoryInputThin";
import { setIsTherapy, setGInsurance } from "../../../redux/counterSlice";
import { useDispatch } from "react-redux";
import MHistoryNoRemoteAlert from "../../atoms/medical_history_form/MHistoryNoRemoteAlert";

interface IMHistoryMultiOptionForm {
  disabled: boolean;
}

const MHistoryMultiOptionForm: React.FC<IMHistoryMultiOptionForm> = ({
  disabled,
}) => {
  const dispatch = useDispatch();
  const [isInsurance, setIsInsurance] = useState(0);
  const [isDoctorCheck, setIsDoctorCheck] = useState(0);
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [isAllergy, setIsAllergy] = useState(0);
  const [isillnesses, setIsillnesses] = useState(0);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isAllergyDisabled, setIsAllergyDisabled] = useState(true);
  const [isillnessesDisabled, setIsillnessesDisabled] = useState(true);

  useEffect(() => {
    if (isDoctorCheck === 0) {
      dispatch(setIsTherapy("Nein"));
    } else if (isDoctorCheck === 1) {
      dispatch(setIsTherapy("Ja"));
    } else if (isDoctorCheck === 2) {
      dispatch(
        setIsTherapy(
          "Ich habe noch nicht mit meinen Ärzten darüber gesprochen."
        )
      );
    }
  }, [isDoctorCheck, dispatch]);

  useEffect(() => {
    if (isInsurance === 0) {
      dispatch(setGInsurance("Ich bin Selbstzahler"));
    } else {
      dispatch(setGInsurance("Ich bin privat versichert"));
    }
  }, [isInsurance, dispatch]);

  useEffect(() => {
    if (currentDisplay == 1) {
      setIsInputDisabled(false);
    } else {
      setIsInputDisabled(true);
    }
  }, [currentDisplay]);

  useEffect(() => {
    if (isAllergy == 1) {
      setIsAllergyDisabled(false);
    } else {
      setIsAllergyDisabled(true);
    }
  }, [isAllergy]);

  useEffect(() => {
    if (isillnesses == 1) {
      setIsillnessesDisabled(false);
    } else {
      setIsillnessesDisabled(true);
    }
  }, [isillnesses]);
  return (
    <div
      className={`multi-select ${
        disabled
          ? "disable-attr w-full flex -webkit-flex flex-col justify-start items-start mt-[20px] bg-white md:p-[3.125rem] p-[24px] md:rounded-[36px] rounded-[24px] Myshadow"
          : "w-full flex -webkit-flex flex-col justify-start items-start mt-[20px] bg-white md:p-[3.125rem] p-[24px] md:rounded-[36px] rounded-[24px] Myshadow"
      }`}
    >
      <span className="text-[16px] font-normal w-full">
        Nehmen Sie regelmäßig Medikamente ein?
        <span className=" text-alert-red font-bold">*</span>
      </span>
      <div className="mt-[16px] flex -webkit-flex w-full items-center gap-5 justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px] max-[650px]:flex-col">
        <RadiobtnChecked
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
      <span className="text-[16px] font-normal w-full mt-[36px]">
        Sind bei Ihnen Allergien bekannt? Falls ja, bitte detalierte Angaben
        machen
        <span className=" text-alert-red font-bold">*</span>
      </span>
      <div className="mt-[16px] max-[650px]:flex-col flex -webkit-flex w-full gap-5 items-center justify-between ">
        <RadiobtnChecked
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
          <MHistoryInputThin content="Papaja" disabled={isAllergyDisabled} />
        </div>
      </div>
      <div
        className={`multi-select ${
          isAllergy === 1
            ? "py-[10px] px-6 bg-[#D7000D08] sm:w-[360px] w-full rounded-[20px] mr-0 ml-auto flex -webkit-flex justify-end items-center mt-4"
            : "hidden"
        }`}
      >
        <MHistoryNoRemoteAlert />
      </div>
      <span className="text-[16px] font-normal w-full mt-[36px]">
        Sind Ihre Allergologen darüber informiert, dass Sie eine Therapie mit
        medizinischem Cannabis beginnen möchten, und sehen Ihre Ärzte keine
        Kontraindikationen?
      </span>
      <div className=" mt-[16px] flex -webkit-flex w-full items-start justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px] max-sm:flex-col max-sm:items-start gap-5">
        <div className="w-1/3 flex -webkit-flex items-center">
          <RadiobtnChecked
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
      <span className="text-[16px] font-normal w-full mt-[36px]">
        Leiden Sie an chronischen Krankheiten, einschließlich psychischer
        Erkrankungen?
        <span className=" text-alert-red font-bold">*</span>
      </span>
      <div className=" mt-[16px] flex -webkit-flex w-full items-center gap-5  justify-between border-b border-[rgba(0,0,0,0.07)] pb-[20px] max-[650px]:flex-col">
        <RadiobtnChecked
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
      <span className="text-[16px] font-normal w-full mt-[36px]">
        Zahlen Sie selbst oder sind Sie privat versichert?
      </span>
      <div className=" mt-[16px] flex -webkit-flex w-full items-center justify-start max-[650px]:flex-col max-[650px]:items-start gap-5 ">
        <RadiobtnChecked
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
