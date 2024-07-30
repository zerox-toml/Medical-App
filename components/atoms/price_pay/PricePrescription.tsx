import React, { useState } from "react";
import Image from "next/image";

import defaultBulletIcon from "../../../public/Icon/bullet.png";
import hoverBulletIcon from "../../../public/Icon/whitebullet.png";
import greencheck from "../../../public/Icon/check-green.png";

const PricePrescription = () => {
  const [src, setSrc] = useState(defaultBulletIcon);
  const [src1, setSrc1] = useState(defaultBulletIcon);
  const [src2, setSrc2] = useState(defaultBulletIcon);
  const [isClickCard, setIsClickCard] = useState(false);
  const [isClickCard1, setIsClickCard1] = useState(false);
  const [isClickCard2, setIsClickCard2] = useState(false);

  const handleMouseEnter = () => {
    setSrc(hoverBulletIcon);
  };
  const handleMouseEnter1 = () => {
    setSrc1(hoverBulletIcon);
  };
  const handleMouseEnter2 = () => {
    setSrc2(hoverBulletIcon);
  };

  const handleMouseLeave = () => {
    setSrc(defaultBulletIcon);
  };
  const handleMouseLeave1 = () => {
    setSrc1(defaultBulletIcon);
  };
  const handleMouseLeave2 = () => {
    setSrc2(defaultBulletIcon);
  };
  const handleMouseClick = () => {

    if (isClickCard == false) {
      setIsClickCard(true);
      setIsClickCard1(false);
      setIsClickCard2(false);
      setSrc(defaultBulletIcon);
    } else {
      setIsClickCard(false);
      setSrc(hoverBulletIcon);
    }
  };
  const handleMouseClick1 = () => {
    if (isClickCard1 == false) {
      setIsClickCard1(true);
      setIsClickCard(false);
      setIsClickCard2(false);
      setSrc1(hoverBulletIcon);
    } else setIsClickCard1(false);
  };
  const handleMouseClick2 = () => {
    if (isClickCard2 == false) {
      setIsClickCard2(true);
      setIsClickCard1(false);
      setIsClickCard(false);
      setSrc2(hoverBulletIcon);
    } else setIsClickCard2(false);
  };
  return (
    <div className="flex gap-4 flex-wrap justify-center ">
      <div
        className="flex flex-col sm:w-auto w-full cursor-pointer "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleMouseClick()}
      >
        <div
          className={` ${
            isClickCard ? "bg-custom-purple text-white" : "bg-white"
          } hover:bg-[#6d37a3] border-custom-pink duration-300 ease-in-out border-8 rounded-[30px] pt-7 px-6
         sm:w-[277px] w-full sm:h-[372px] h-auto flex flex-col text-custom-black hover:text-white shadow-custom-card active:zoom-effect-card
        justify-between z-10 relative `}
        >
          <h3 className=" text-base font-extrabold">
            Rezeptanfrage Erstrezept
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-start gap-1 mt-2">
              <Image
                className="mt-2"
                src={src}
                alt="Bullet"
                width={12}
                height={12}
              />
              <p>Rezeptausstellung nach Prüfung</p>
            </div>
            <div className="flex items-start justify-start gap-1">
              <Image
                className="mt-2"
                src={src}
                alt="Bullet"
                width={12}
                height={12}
              />
              <p>Arzt/Ärztin aus der Europäische Union (EU)</p>
            </div>
            <div className="flex items-start justify-start gap-1">
              <Image
                className="mt-2"
                src={src}
                alt="Bullet"
                width={12}
                height={12}
              />
              <p>Dauer: ca. 24 Stunden</p>
            </div>
          </div>
          <div className="w-full sm:h-[78px] h-12"></div>
          <div className="bg-custom-pink py-1 px-4 w-[106px] mx-auto text-sm flex justify-center items-center rounded-t-[8px] text-custom-purple">
            sehr beliebt
          </div>
        </div>
        <div className="flex justify-between px-6 bg-[#E6E6E6] h-[130px] mt-[-55px] z-0 relative pt-[75px] rounded-b-[30px]">
          <span className="text-[#6D6D6D] text-[32px] font-extrabold">
            25 €
          </span>
          <span className="text-[#D7000D] text-[32px] font-extrabold">
            21.99 €
          </span>
        </div>
      </div>
      <div
        className="flex flex-col gap-[18px] sm:w-auto w-full cursor-pointer"
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
        onClick={() => handleMouseClick1()}
      >
        <div
          className={`hover:bg-[#6d37a3] ${
            isClickCard1 ? "bg-custom-purple text-white" : "bg-white"
          }  text-custom-black duration-300 ease-in-out hover:text-white relative z-10 rounded-[30px] pt-9 px-6 
        sm:w-[277px] w-full sm:h-[372px] h-auto flex flex-col justify-between pb-[71px] shadow-custom-card`}
        >
          <h3 className="text-base font-extrabold">Rezeptanfrage Erstrezept</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-start gap-1 mt-2">
              <Image
                className="mt-2"
                src={src1}
                alt="Bullet"
                width={12}
                height={12}
              />
              <p className="">
                Formular zum Reisen innerhalb des Schengenraums
              </p>
            </div>
            <div className="flex items-start justify-start gap-1">
              <Image
                className="mt-2"
                src={src1}
                alt="Bullet"
                width={12}
                height={12}
              />
              <p className="">Inklusive Patientenausweis</p>
            </div>
          </div>
          <div className="w-full sm:h-[78px] h-12"></div>
        </div>
        <div className="flex justify-between px-6 bg-[#6300C726] h-[130px] mt-[-75px] z-0 relative pt-[75px] rounded-b-[30px]">
          <span className="text-[#6D6D6D] text-[32px] font-extrabold">
            25 €
          </span>
          <span className="text-[#D7000D] text-[32px] font-extrabold"></span>
        </div>
      </div>
      <div
        className="flex flex-col gap-[18px] sm:w-auto w-full cursor-pointer"
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
        onClick={() => handleMouseClick2()}
      >
        <div
          className={`${
            isClickCard2 ? "bg-custom-purple text-white" : "bg-white"
          } hover:bg-[#6d37a3] rounded-[30px] pt-9 px-6 text-[#363636] relative duration-300 ease-in-out shadow-custom-card
         hover:text-white sm:w-[277px] w-full sm:h-[372px] h-auto flex flex-col justify-between pb-[71px] z-10`}
        >
          <h3 className=" text-base font-extrabold">Online-Sprechstunde</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-start gap-1 mt-2">
              <Image
                className="mt-2"
                src={src2}
                alt="Bullet"
                width={12}
                height={12}
              />
              <p className="text-base">Rezeptausstellung nach Gespräch</p>
            </div>
            <div className="flex items-start justify-start gap-1">
              <Image
                className="mt-2"
                src={src2}
                alt="Bullet"
                width={12}
                height={12}
              />
              <p className="text-base">Deutschsprachige/r Arzt/Ärztin</p>
            </div>
            <div className="flex items-start justify-start gap-1">
              <Image
                className="mt-2"
                src={src2}
                alt="Bullet"
                width={12}
                height={12}
              />
              <p className="text-base">Dauer: ca. 20 Minuten</p>
            </div>
          </div>
          <div className="w-full sm:h-[78px] h-12 mt-[30px]">
            <div className="flex items-start justify-center py-1 gap-1 bg-[#008E6C12] rounded-[30px] mb-4">
              <Image
                className="mt-2"
                src={greencheck}
                alt="Bullet"
                width={12}
                height={12}
              />
              <p className="text-base text-[#008E6C] hover:text-white">
                Reiseformular möglich
              </p>
            </div>
            <div className="flex items-start justify-center py-1 gap-1 bg-[#008E6C12] rounded-[30px]">
              <Image
                className="mt-2"
                src={greencheck}
                alt="Bullet"
                width={12}
                height={12}
              />
              <p className="text-base text-[#008E6C] hover:text-white">
                PKV erstattungsfähig
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-6 bg-[#E6E6E6] h-[130px] mt-[-75px] z-0 relative pt-[75px] rounded-b-[30px]">
          <span className="text-[#6D6D6D] text-[32px] font-extrabold">
            50 €
          </span>
          <span className="text-[#D7000D] text-[32px] font-extrabold"></span>
        </div>
      </div>
    </div>
  );
};

export default PricePrescription;
