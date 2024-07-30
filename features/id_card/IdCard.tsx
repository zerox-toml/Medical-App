import React from "react";
import IdVanguard from "../../components/molecules/id_card/IdVanguard";
import IdCardUpload from "../../components/molecules/id_card/IdCardUpload";
import Button from "../../components/atoms/Button";

interface Props {
  isStep: number;
  setIsStep: (value: number) => void;
}
const IdCard = ({ isStep, setIsStep }: Props) => {
  return (
    <div className="w-full bg-[rgba(243,243,243)] flex -webkit-flex flex-col justify-center items-center h-auto min-h-[100vh]">
      <div className=" lg:max-w-[820px] lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm w-full px-[15px] mb-12">
        <h2 className="text-[36px] text-[#161616] font-extrabold leading-[3.2rem] pb-10">
          Persönliche Information
        </h2>
        <div className="bg-whtie w-full h-auto">
          <IdVanguard />
          <IdCardUpload />
        </div>
        <Button
          content="weiter"
          onClick={() => setIsStep(3)}
          className=" w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)]
           rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white mt-[20px] sm:mb-[130px] mb-[80px]"
        />
      </div>
    </div>
  );
};

export default IdCard;
