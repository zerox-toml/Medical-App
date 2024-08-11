"use client";

import React, { useEffect, useState } from "react";
import ComMedicalHistoryForm from "../../components/molecules/medical_history_form/ComMedicalHistoryForm";
import HeadQuestionWithAccount from "../../components/atoms/header/HeadQuestionWithAccount";
import MHistoryCheckingInfo from "./MHistoryCheckingInfo";
import MHistoryMultiSelect from "../../components/molecules/medical_history_form/MHistoryMultiSelect";
import MHistoryHaveAccountQuestion from "../../components/molecules/medical_history_form/MHistoryHaveAccountQuestion";
import MHistoryMultiOptionForm from "../../components/molecules/medical_history_form/MHistoryMultiOptionForm";
import Button from "../../components/atoms/Button";
import { setPageStatus, setValidationErrors } from "../../redux/counterSlice";
import { connect, useDispatch, useSelector } from "react-redux";
import InputErrorAlert from "../../components/atoms/InputErrorAlert";

import toast from "react-hot-toast";

interface Props {
  isStep: number;
  setIsStep: (value: number) => void;
  tphone: string;
  fname: string;
  lname: string;
  detailedSymptom: string;
  setValidationErrors: any;
  validationErrors: any;
  isTherapy: number;
}
const MHistoryHaveAccountPage = ({
  isStep,
  setIsStep,
  tphone,
  fname,
  lname,
  detailedSymptom,
  validationErrors,
  setValidationErrors,
  isTherapy,
}: Props) => {
  const [isOne, setIsOne] = useState(false);
  const pageStatus = useSelector((state: any) => state.counter.pageStatus);
  const email = useSelector((state: any) => state.counter.email);
  const gender = useSelector((state: any) => state.counter.gender);
  const mister = useSelector((state: any) => state.counter.mister);
  const birthday = useSelector((state: any) => state.counter.birthday);
  const gInsurance = useSelector((state: any) => state.counter.gInsurance);
  const gHaveAllergy = useSelector((state: any) => state.counter.gHaveAllergy);
  const gDoctorLamaCheck = useSelector((state: any) => state.counter.gDoctorLamaCheck);
  const gHaveIllness = useSelector((state: any) => state.counter.gHaveIllness);
  const gAlwaysGetMedicine = useSelector((state: any) => state.counter.gAlwaysGetMedicine);

  const [isInvalidEmail, setisInvalidEmail] = useState(true);
  const [isInvalidRegisteredEmail, setisInvalidRegisteredEmail] =
    useState(true);
  // symptom validator
  const symptoms = useSelector((state: any) => state.counter.symptoms);
  const symptomsLength = symptoms.length;
  const [symptomsFlag, setSymptomsFlag] = useState(0);
  const [hasErrors, setHasErrors] = useState(false);
  const registerEmail = useSelector(
    (state: any) => state.counter.registerEmail
  );

  const handleAlreadyAccount = async () => {
    toast.success(
      "Sie haben eine E-Mail mit einem Link erhalten, falls Sie bereits ein Rezept über unseren Service erhalten haben.",
      {
        duration: 1500,
      }
    );

    try {
      const response = await fetch(
        "https://api.extensive.live/customer/returning",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: registerEmail }),
        }
      );

      if (response.status == 201) {
        // user is already registered sent msg to user email
      }
    } catch (error) {
      console.error("Error during confirm user:", error);
    }
  };

  const handleClick = async () => {
    const errors = {
      tphone: !tphone,
      fname: !fname,
      lname: !lname,
      email: !email,
      gender: !gender,
      birthday: !birthday,
      gInsurance: !gInsurance,
      gHaveAllergy: !gHaveAllergy,
      gDoctorLamaCheck: !birthday,
      gHaveIllness: !gHaveIllness,
      gAlwaysGetMedicine: !gAlwaysGetMedicine,
      detailedSymptom: !detailedSymptom,
      symptoms: !symptoms,
      mister: !mister,
    };
    setValidationErrors(errors);
    
    let hasErrors;
    if (email == null || "") {
      setisInvalidEmail(false);
    }
    if (
      !tphone ||
      !fname ||
      !lname ||
      !email ||
      !mister ||
      !detailedSymptom ||
      !isInvalidEmail ||
      !gender ||
      !birthday ||
      !gInsurance ||
      !gHaveAllergy ||
      !gDoctorLamaCheck ||
      !gHaveIllness ||
      !gAlwaysGetMedicine ||
      symptoms.length === 0
    ) {
      hasErrors = true;
      setHasErrors(true);
    } else {
      hasErrors = false;
      setHasErrors(false);
    }

    if (symptomsLength == 0) {
      setSymptomsFlag(1);
    } else {
      setSymptomsFlag(0);
    }

    if (!hasErrors) {
      setIsStep(1);
      window.scrollTo(0, 0);
    }
  };
  
  return (
    <div className="w-full bg-[rgba(243,243,243)] flex -webkit-flex flex-col justify-center items-center min-h-[100vh]">
      <div className=" lg:max-w-[820px] lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm w-full px-[15px]">
        <h2 className="text-[36px] text-[#161616] font-extrabold leading-[3.2rem]">
          Anamnesebogen
        </h2>
        <ComMedicalHistoryForm />
        <MHistoryHaveAccountQuestion
          setIsOne={setIsOne}
          isOne={isOne}
          isInvalidRegisteredEmail={isInvalidRegisteredEmail}
          setisInvalidRegisteredEmail={setisInvalidRegisteredEmail}
          handleAlreadyAccount={handleAlreadyAccount}
        />
        <MHistoryCheckingInfo
          disabled={isOne}
          isInvalidEmail={isInvalidEmail}
          setisInvalidEmail={setisInvalidEmail}
        />
        <MHistoryMultiSelect disabled={isOne} symptomsFlag={symptomsFlag} />
        <MHistoryMultiOptionForm disabled={isOne} />
        <Button
          disabled={isOne || isTherapy === 1 || isTherapy === 2}
          content="weiter"
          onClick={handleClick}
          className={` w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)] rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white mt-[20px] ${
            hasErrors ? "mb-[20px]" : "mb-[130px]"
          } `}
        />
        <div
          className={`${
            hasErrors === true
              ? "py-[10px] px-6 bg-[#D7000D08] w-full rounded-[20px] mr-0 ml-auto flex -webkit-flex justify-end items-center mb-[100px]"
              : "hidden"
          }`}
        >
          <InputErrorAlert />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  fname: state.counter.fname,
  lname: state.counter.lname,
  tphone: state.counter.tphone,
  detailedSymptom: state.counter.detailedSymptom,
  birthday: state.counter.birthday,
  gender: state.counter.gender,
  validationErrors: state.counter.validationErrors,
  isTherapy: state.counter.isTherapy,
});
const mapDispatchToProps = { setValidationErrors };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MHistoryHaveAccountPage);
