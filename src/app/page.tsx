"use client";

import { useEffect, useState } from "react";
import MHistoryHaveAccountPage from "../../features/medical_history_form/MHistoryHaveAccountPage";
import PInformationPage from "../../features/personal_information/PInformationPage";
import IdCard from "../../features/id_card/IdCard";
import HeadQuestionWithAccount from "../../components/atoms/header/HeadQuestionWithAccount";
import { useSelector, useDispatch } from "react-redux";
import Prepare from "../../features/choose_prepare/Prepare";
import ChoosePharmacy from "../../features/pharmacy/ChoosePharmacy";
import ChooseDoctorPage from "../../features/chooseDoctorPage/ChooseDoctorPage";
import PricePayMethod from "../../features/price_payment/PricePayMethod";

export default function Home() {
  const [isStep, setIsStep] = useState(0);
  const [isProductStep, setIsProductStep] = useState(0);
  const [showFilter, setShowFilter] = useState(true);

  return (
    <main className="">
      <HeadQuestionWithAccount
        isStep={isStep}
        setIsStep={setIsStep}
        setIsProductStep={setIsProductStep}
      />
      <div className={`${showFilter? "pt-[60px]":"pt-7"} flex flex-col sm:pt-20  bg-[rgba(243,243,243)]`}>
        {isStep === 0 ? (
          <MHistoryHaveAccountPage isStep={isStep} setIsStep={setIsStep} />
        ) : isStep === 1 ? (
          <PInformationPage isStep={isStep} setIsStep={setIsStep} />
        ) : isStep === 2 ? (
          <IdCard isStep={isStep} setIsStep={setIsStep} />
        ) : isStep === 3 ? (
          isProductStep === 0 ? (
            <Prepare isStep={isProductStep} setIsStep={setIsProductStep} showFilter = {showFilter} setShowFilter = {setShowFilter}/>
          ) : isProductStep === 1 ? (
            <ChoosePharmacy isStep={isStep} setIsStep={setIsStep} />
          ) : (
            <ChooseDoctorPage isStep={isStep} setIsStep={setIsStep} />
          )
        ) : isStep === 4 ? (
          <PricePayMethod isStep={isStep} setIsStep={setIsStep} />
        ) : null}
      </div>
    </main>
  );
}
