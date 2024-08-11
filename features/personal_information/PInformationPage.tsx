"use client";

import React, { useEffect, useState } from "react";
import PInfoFirstCheck from "../../components/molecules/p_information/PInfoFirstCheck";
import {
  setGCannvanisDrive,
  setGCTKnow,
} from "../../redux/counterSlice";

import PInfoSecondCheck from "../../components/molecules/p_information/PInfoSecondCheck";
import PInfoCheckDataList from "../../components/molecules/p_information/PInfoCheckDataList";
import PInfoAnythingElse from "../../components/molecules/p_information/PInfoAnythingElse";
import { } from "../../redux/counterSlice";
import Button from "../../components/atoms/Button";
import { useDispatch } from "react-redux";

interface Props {
  isStep: number;
  setIsStep: (value: number) => void;
}

const PInformationPage = ({ isStep, setIsStep }: Props) => {
  const dispatch = useDispatch();
  const [pIFirst, setPIFirst] = useState(null);
  const [pISecond, setPISecond] = useState(null);
  const [isListChecked, setIsListChecked] = useState(true);

  const handleSetStep = () => {    
    
    setIsStep(2);
    window.scrollTo(0, 0);

  };

  useEffect(() => {
    if (pIFirst) {
      dispatch(setGCannvanisDrive(true));
    } else {
      dispatch(setGCannvanisDrive(false));
    }
  }, [pIFirst, dispatch]);

  useEffect(() => {
    if (pISecond) {
      dispatch(setGCTKnow(true));
    } else {
      dispatch(setGCTKnow(false));
    }
  }, [pISecond, dispatch]);

  return (
    <div className="w-full bg-[rgba(243,243,243)] flex -webkit-flex flex-col justify-center items-center h-auto min-h-[100vh]">
      <div className=" lg:max-w-[820px] lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm w-full px-[15px]">
        <h2 className="text-[36px] text-[#161616] font-extrabold leading-[3.2rem]">
          Persönliche Information
        </h2>
        <div className="w-full rounded-3xl p-[50px] bg-white mb-5 mt-10 max-md:p-6">
          <PInfoFirstCheck pIFirst={pIFirst} setPIFirst={setPIFirst} />
          <PInfoSecondCheck pISecond={pISecond} setPISecond={setPISecond} />
          <div className="mt-9 mb-5 border-b-[#00000012] w-full">
            <p className="text-normal-text text-base mb-4">
              Liegt bei Ihnen eines der folgenden Ausschlusskriterien vor?
            </p>
            <PInfoCheckDataList isListChecked = {isListChecked} setIsListChecked={setIsListChecked}/>
          </div>
          <PInfoAnythingElse />
        </div>
        <Button
          disabled={pIFirst == false || pISecond == false || !isListChecked}
          content="weiter"
          onClick={() => handleSetStep()}
          className=" w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white
           hover:text-[rgba(65,5,126,1)] rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white mt-[20px] sm:mb-[130px] mb-[80px]"
        />
      </div>
    </div>
  );
};

export default PInformationPage;
