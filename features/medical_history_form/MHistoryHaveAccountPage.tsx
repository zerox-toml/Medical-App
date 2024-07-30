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

interface Props {
  isStep: number;
  setIsStep: (value: number) => void;
  tphone: string;
  fname: string;
  lname: string;
  detailedSymptom: string;
  setValidationErrors: any;
  validationErrors: any;
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
}: Props) => {
  const [isOne, setIsOne] = useState(false);
  const pageStatus = useSelector((state: any) => state.counter.pageStatus);

  // symptom validator
  const symptoms = useSelector((state: any) => state.counter.symptoms);
  const symptomsLength = symptoms.length;
  const [symptomsFlag, setSymptomsFlag] = useState(0);

  const handleClick = async () => {
    const errors = {
      tphone: !tphone,
      fname: !fname,
      lname: !lname,
      detailedSymptom: !detailedSymptom,
    };
    setValidationErrors(errors);
    let hasErrors;
    if (!tphone || !fname || !lname || !detailedSymptom) {
      hasErrors = true;
    } else {
      hasErrors = false;
    }

    if (symptomsLength == 0) {
      setSymptomsFlag(1);
      window.scrollTo(0, 400);
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
        <MHistoryHaveAccountQuestion setIsOne={setIsOne} isOne={isOne} />
        <MHistoryCheckingInfo disabled={isOne} />
        <MHistoryMultiSelect disabled={isOne} symptomsFlag={symptomsFlag} />
        <MHistoryMultiOptionForm disabled={isOne} />
        <Button
          disabled={isOne}
          content="weiter"
          onClick={handleClick}
          className=" w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)] rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white mt-[20px] mb-[130px]"
        />
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
});
const mapDispatchToProps = { setValidationErrors };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MHistoryHaveAccountPage);
