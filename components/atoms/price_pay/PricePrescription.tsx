import React, { useEffect, useState } from "react";
import Image from "next/image";

import defaultBulletIcon from "../../../public/Icon/bullet.png";
import hoverBulletIcon from "../../../public/Icon/whitebullet.png";
import greencheck from "../../../public/Icon/check-green.png";
import { setPrescriptionId } from "../../../redux/counterSlice";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

interface Prescription1 {
  name: string
  description: string,
  popular: boolean,
  id: number,
  regularPrice: number,
  discountedPrice: number,
  active: boolean,
  order: number
}

interface Prescription2 {
  name: string
  description: string,
  id: number,
  regularPrice: number,
  active: boolean,
  order: number
}

interface Prescription3 {
  name: string
  description: string,
  tags: string[],
  id: number,
  regularPrice: number,
  active: boolean,
  order: number
}

const PricePrescription = () => {
  const dispatch = useDispatch();
  const [src, setSrc] = useState(defaultBulletIcon);
  const [src1, setSrc1] = useState(defaultBulletIcon);
  const [src2, setSrc2] = useState(defaultBulletIcon);
  const [isClickCard, setIsClickCard] = useState(false);
  const [isClickCard1, setIsClickCard1] = useState(false);
  const [isClickCard2, setIsClickCard2] = useState(false);
  const [prescription1, setPrescription1] = useState<Prescription1>({
    name: "",
    description: '',
    popular: true,
    id: 1,
    regularPrice: 25,
    discountedPrice: 21.99,
    active: true,
    order: 1
  });
  const [prescription2, setPrescription2] = useState<Prescription2>({
    name: "",
    description: '',
    id: 2,
    regularPrice: 25,
    active: true,
    order: 2
  });
  const [prescription3, setPrescription3] = useState<Prescription3>({
    name: "",
    description: "",
    tags: [
      "",
      ""
    ],
    id: 3,
    regularPrice: 50,
    active: true,
    order: 3
  });

  const [prescriptionSplit1, setPrescriptionSplit1] = useState<string[]>([]);
  const [prescriptionSplit2, setPrescriptionSplit2] = useState<string[]>([]);
  const [prescriptionSplit3, setPrescriptionSplit3] = useState<string[]>([]);

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
    dispatch(setPrescriptionId(prescription1));
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
    dispatch(setPrescriptionId(prescription2));
    if (isClickCard1 == false) {
      setIsClickCard1(true);
      setIsClickCard(false);
      setIsClickCard2(false);
      setSrc1(hoverBulletIcon);
    } else setIsClickCard1(false);
  };
  const handleMouseClick2 = () => {
    dispatch(setPrescriptionId(prescription3));
    if (isClickCard2 == false) {
      setIsClickCard2(true);
      setIsClickCard1(false);
      setIsClickCard(false);
      setSrc2(hoverBulletIcon);
    } else setIsClickCard2(false);
  };

  const GetData = async () => {
    const prescription = await fetch("/api/prescription");
    const prescriptionData = await prescription.json();
    setPrescription1(prescriptionData[0])
    setPrescription2(prescriptionData[1])
    setPrescription3(prescriptionData[2])
    setPrescriptionSplit1(prescriptionData[0].description.split('\n'))
    setPrescriptionSplit2(prescriptionData[1].description.split('\n'))
    setPrescriptionSplit3(prescriptionData[2].description.split('\n'))
  };

  useEffect(() => {
    GetData();
  }, [])

  return (
    <div className="flex -webkit-flex gap-4 flex-wrap justify-center ">
      <div
        className="flex -webkit-flex flex-col sm:w-auto w-full cursor-pointer "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleMouseClick()}
      >
        <div
          className={` ${isClickCard ? "bg-custom-purple text-white" : "bg-white"
            } hover:bg-[#6d37a3] border-custom-pink duration-300 ease-in-out border-8 rounded-[30px] pt-7 px-6
         sm:w-[277px] w-full sm:h-[372px] h-auto flex -webkit-flex flex-col text-custom-black hover:text-white shadow-custom-card active:zoom-effect-card
        justify-between z-10 relative `}
        >
          <h3 className=" text-base font-extrabold">
            {prescription1.name}
          </h3>
          <div className="flex -webkit-flex flex-col gap-3">
            {prescriptionSplit1.map((ps, index) => (
              <div key={index} className="flex -webkit-flex items-start justify-start gap-1 mt-2">
                  <Image
                    className="mt-[6px]"
                    src={isClickCard ? hoverBulletIcon : src}
                    alt="Bullet"
                    width={12}
                    height={12}
                  />
                <p>{ps}</p>
              </div>
            ))}
          </div>
          <div className="w-full sm:h-[78px] h-12"></div>
          <div className="bg-custom-pink py-1 px-4 w-[106px] mx-auto text-[16px] flex -webkit-flex justify-center items-center rounded-t-[8px] text-custom-purple">
            sehr beliebt
          </div>
        </div>
        <div className="flex -webkit-flex justify-between px-6 bg-[#E6E6E6] h-[130px] mt-[-55px] z-0 relative pt-[75px] rounded-b-[30px]">
          <span className="text-[#6D6D6D] text-[32px] font-extrabold">
            {prescription1.regularPrice} €
          </span>
          <span className="text-[#D7000D] text-[32px] font-extrabold">
            {prescription1.discountedPrice} €
          </span>
        </div>
      </div>
      <div
        className="flex -webkit-flex flex-col gap-[18px] sm:w-auto w-full cursor-pointer"
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
        onClick={() => handleMouseClick1()}
      >
        <div
          className={`hover:bg-[#6d37a3] ${isClickCard1 ? "bg-custom-purple text-white" : "bg-white"
            }  text-custom-black duration-300 ease-in-out hover:text-white relative z-10 rounded-[30px] pt-9 px-6 
        sm:w-[277px] w-full sm:h-[372px] h-auto flex -webkit-flex flex-col justify-between pb-[71px] shadow-custom-card`}
        >
          <h3 className="text-base font-extrabold">{prescription2.name}</h3>
          <div className="flex -webkit-flex flex-col gap-3">
            {prescriptionSplit2.map((ps, index) => (
              <div key={index} className="flex -webkit-flex items-start justify-start gap-1 mt-2">
                  <Image
                    className="mt-[6px]"
                    src={isClickCard1 ? hoverBulletIcon : src1}
                    alt="Bullet"
                    width={12}
                    height={12}
                  />
                <p>{ps}</p>
              </div>
            ))}
          </div>
          <div className="w-full sm:h-[78px] h-12"></div>
        </div>
        <div className="flex -webkit-flex justify-between px-6 bg-[#6300C726] h-[130px] mt-[-75px] z-0 relative pt-[75px] rounded-b-[30px]">
          <span className="text-[#6D6D6D] text-[32px] font-extrabold">
            {prescription2.regularPrice} €
          </span>
          <span className="text-[#D7000D] text-[32px] font-extrabold"></span>
        </div>
      </div>
      <div
        className="flex -webkit-flex flex-col gap-[18px] sm:w-auto w-full cursor-pointer"
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
        onClick={() => handleMouseClick2()}
      >
        <div
          className={`${isClickCard2 ? "bg-custom-purple text-white" : "bg-white"
            } hover:bg-[#6d37a3] rounded-[30px] pt-9 px-6 text-[#363636] relative duration-300 ease-in-out shadow-custom-card
         hover:text-white sm:w-[277px] w-full sm:h-[372px] h-auto flex -webkit-flex flex-col justify-between pb-[71px] z-10`}
        >
          <h3 className=" text-base font-extrabold">{prescription3.name}</h3>
          <div className="flex -webkit-flex flex-col gap-3">
            {prescriptionSplit3.map((ps, index) => (
              <div key={index} className="flex -webkit-flex items-start justify-start gap-1 mt-2">
                  <Image
                    className="mt-[6px]"
                    src={isClickCard2 ? hoverBulletIcon : src2}
                    alt="Bullet"
                    width={12}
                    height={12}
                  />
                <p>{ps}</p>
              </div>
            ))}
          </div>
          <div className="w-full sm:h-[78px] h-12 mt-[30px]">
            {prescription3.tags.map((pt, index) => (
              <div key={index} className="flex -webkit-flex items-start justify-center py-1 gap-1 bg-[#008E6C12] rounded-[30px] mb-4">
                <Image
                  className="mt-2"
                  src={greencheck}
                  alt="Bullet"
                  width={12}
                  height={12}
                />
                <p className="text-base text-[#008E6C] hover:text-white">
                  {pt}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex -webkit-flex justify-between px-6 bg-[#E6E6E6] h-[130px] mt-[-75px] z-0 relative pt-[75px] rounded-b-[30px]">
          <span className="text-[#6D6D6D] text-[32px] font-extrabold">
            {prescription3.regularPrice} €
          </span>
          <span className="text-[#D7000D] text-[32px] font-extrabold"></span>
        </div>
      </div>
    </div>
  );
};

export default PricePrescription;
