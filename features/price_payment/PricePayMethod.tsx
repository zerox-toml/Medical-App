"use client";
import React, { useEffect, useState } from "react";
import { IStepProps } from "../../type/FilterProps";
import PricePrescription from "../../components/atoms/price_pay/PricePrescription";
import ConfirmProducts from "../../components/molecules/price_pay/ConfirmProducts";
import Image from "next/image";
import warningIcon from "../../public/Icon/warning.png";
import DoctorFinal from "../../components/molecules/doctor/DoctorFinal";
import InputDefault from "../../components/molecules/price_pay/InputDefault";
import Button from "../../components/atoms/Button";
import Delivery from "../../components/molecules/price_pay/Delivery";
import PaymentMethod from "../../components/molecules/price_pay/PaymentMethod";
import { setGCouponCode } from "../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setalertAGB,
  setalertDaten,
  setalertLCheck1,
  setalertLCheck2,
} from "../../redux/counterSlice";

const PricePayMethod: React.FC<IStepProps> = ({ isStep, setIsStep }) => {
  const [chageAGB, setChageAGB] = useState(false);
  const [chageDaten, setChageDaten] = useState(false);
  const [lastCheck1, setLastCheck1] = useState(false);
  const [lastCheck2, setLastCheck2] = useState(false);
  const [lastValidErrors, setLastValidErrors] = useState(true);
  const [lastValidFlag, setLastValidFlag] = useState(0);

  const dispatch = useDispatch();
  const [isClicked2, setIsClicked2] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const handleDoctor2 = () => {};
  const applyZur = () => {
    dispatch(setGCouponCode(couponCode));
  };
  const alertcheck1 = useSelector((state: any) => state.counter.alertcheck1);

  const sendPredic = async () => {
    const isCheck = chageAGB && chageDaten && lastCheck1 && lastCheck2;

    setLastValidErrors(isCheck);
    if (isCheck) {
      console.log("success");
    }
  };

  return (
    <div className="w-full bg-[rgba(243,243,243)]  flex -webkit-flex flex-col items-center h-auto min-h-[100vh]">
      <div className=" lg:max-w-[870px] lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm w-full px-[15px] mb-12">
        <h2 className="text-4xl mb-10 mr-auto text-[#161616] font-extrabold ml-4">
          Preise & Bezahlmethoden
        </h2>
        <div className="pb-[60px] border-b border-b-[#00000012]">
          <PricePrescription />
        </div>

        <div className="max-w-[820px] mx-auto sm:p-[50px] p-6 bg-white md:rounded-[50px] rounded-[24px] mt-[60px]">
          <h1 className="text-[20px] font-extrabold text-custom-black mb-[20px]">
            Zusammenfassung
          </h1>
          <ConfirmProducts />
          <div className="flex -webkit-flex gap-1 bg-[#FFD6001A] justify-center items-center border-b-[#00000012]">
            <Image src={warningIcon} alt="warning" width={14} height={14} />
            <p className="text-[#886419] py-[10px] rounded-[20px]">
              Die hier angezeigten Kosten werden dir separat von deiner
              Wahl-Apotheke in Rechnung gestellt.
            </p>
          </div>
          <div className="my-[30px] py-[30px] border-t-[#00000012] border-b-[#00000012] border-t border-b">
            <DoctorFinal
              onClick={handleDoctor2}
              docImg="/img/doctor2"
              countryImg="/icon/Group3.png"
              countryname="Deutschland"
              major="Phychologie"
              time={6}
              isVideo={false}
            />
          </div>
          <div className="flex -webkit-flex md:flex-row flex-col justify-center items-center gap-4">
            <InputDefault
              content="Gutscheincode"
              inputContent={couponCode}
              setInputContent={setCouponCode}
              className="w-full"
            />
            <Button
              content="zur Übersicht"
              onClick={() => applyZur()}
              className="md:w-[139px] w-full bg-[#FFFFFF] hover:border-[3px] border-[3px] border-[#41057E] hover:border-[rgba(65,5,126,1)] hover:bg-[#41057E] hover:text-[white]
           rounded-[60px] px-4 py-[10px] text-base font-bold text-[#41057E]"
            />
          </div>
          <div className="flex -webkit-flex justify-between items-center font-extrabold text-xl text-custom-black  pt-[30px]">
            <span>Gesamtbetrag</span>
            <span>25,00 €</span>
          </div>
        </div>
        <div className="max-w-[820px] mx-auto mt-[30px] ">
          <Delivery />
        </div>
      </div>
      <div className="lg:max-w-[870px] lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm w-full px-[15px] flex -webkit-flex justify-center">
        <PaymentMethod
          chageAGB={chageAGB}
          setChageAGB={setChageAGB}
          chageDaten={chageDaten}
          setChageDaten={setChageDaten}
          lastCheck1={lastCheck1}
          setLastCheck1={setLastCheck1}
          lastCheck2={lastCheck2}
          setLastCheck2={setLastCheck2}
          lastValidErrors={lastValidErrors}
        />
      </div>
      <Button
        content="zur Übersicht"
        onClick={() => sendPredic()}
        className="w-full max-w-[820px] mt-5 sm:mb-[130px] mb-[80px] bg-custom-purple hover:border-[3px] border-[3px] border-white hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-custom-purple
           rounded-[60px] px-4 py-[10px] text-base font-bold text-white"
      />
    </div>
  );
};

export default PricePayMethod;
