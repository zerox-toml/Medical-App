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
import { Toaster } from "react-hot-toast";

import { setEmail, setLeadId } from "../../redux/counterSlice";

export default function Home() {
  const dispatch = useDispatch();

  const [isStep, setIsStep] = useState(1);
  const [isProductStep, setIsProductStep] = useState(0);
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const uiParam = params.get("ui");
    const emailParam = params.get("email");

    if (uiParam) {
      dispatch(setLeadId(uiParam));
      dispatch(setEmail(emailParam));
      setIsStep(3);
    } else {
      console.log("UI parameter does not exist in the URL");
    }
    // }
  }, []);

  return (
    <main className="">
      <HeadQuestionWithAccount
        isStep={isStep}
        setIsStep={setIsStep}
        setIsProductStep={setIsProductStep}
      />
      <div
        className={`${showFilter ? "pt-[60px]" : "pt-7"
          } flex -webkit-flex flex-col sm:pt-20  bg-[rgba(243,243,243)]`}
      >
        {isStep === 0 ? (
          <MHistoryHaveAccountPage isStep={isStep} setIsStep={setIsStep} />
        ) : isStep === 1 ? (
          <PInformationPage isStep={isStep} setIsStep={setIsStep} />
        ) : isStep === 2 ? (
          <IdCard isStep={isStep} setIsStep={setIsStep} />
        ) : isStep === 3 ? (
          isProductStep === 0 ? (
            <Prepare
              isStep={isStep} 
              setIsStep={setIsStep}
              isProductStep={isProductStep}
              setIsProductStep={setIsProductStep}
              showFilter={showFilter}
              setShowFilter={setShowFilter}
            />
          ) : isProductStep === 1 ? (
            <ChoosePharmacy isStep={isStep} setIsStep={setIsStep} />
          ) : (
            <ChooseDoctorPage isStep={isStep} setIsStep={setIsStep} />
          )
        ) : isStep === 4 ? (
          <PricePayMethod />
        ) : null}

        <Toaster
          position="top-right"
          toastOptions={{ className: "react-hot-toast" }}
        />
      </div>
    </main>
  );
}
