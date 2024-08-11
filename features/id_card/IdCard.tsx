import React, { useState } from "react";
import IdVanguard from "../../components/molecules/id_card/IdVanguard";
import IdCardUpload from "../../components/molecules/id_card/IdCardUpload";
import Button from "../../components/atoms/Button";
import { useSelector } from "react-redux";

interface Props {
  isStep: number;
  setIsStep: (value: number) => void;
}
const IdCard = ({ isStep, setIsStep }: Props) => {
  const [noUpload, setNoUpload] = useState(false);
  const idCardFile = useSelector((state: any) => state.counter.idCardFile);
  const handleSetStep = () => {
    if (idCardFile == null) {
      setNoUpload(true);
      console.log("here?");
      
    } else {
      setNoUpload(false);
      setIsStep(3);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="w-full bg-[rgba(243,243,243)] flex -webkit-flex flex-col justify-center items-center h-auto min-h-[100vh]">
      <div className=" lg:max-w-[820px] lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm w-full px-[15px] mb-12">
        <h2 className={` ${noUpload ?"text-alert-red":"text-[#161616]"} text-[36px]  font-extrabold leading-[3.2rem] pb-10`  }>
          Persönliche Information
        </h2>
        <div className="bg-whtie w-full h-auto">
          <IdVanguard />
          <IdCardUpload />
        </div>
        <Button
          content="weiter"
          onClick={() => handleSetStep()}
          className={` w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)]
           rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white mt-[20px] sm:mb-[130px] mb-[80px]   `}
        />
      </div>
    </div>
  );
};

export default IdCard;
