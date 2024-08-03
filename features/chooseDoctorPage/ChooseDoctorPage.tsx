import React from "react";
import { useState } from "react";
import Button from "../../components/atoms/Button";
import Doctor from "../../components/molecules/doctor/Doctor";

interface Props {
    isStep: number;
    setIsStep: (value: number) => void;
}
const ChooseDoctorPage = ({ isStep, setIsStep }: Props) => {

    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const handleDoctor1 = () => {
        setIsClicked1(!isClicked1);
        setIsClicked2(false);
        setIsClicked3(false);
    }
    const handleDoctor2 = () => {
        setIsClicked2(!isClicked2);
        setIsClicked1(false);
        setIsClicked3(false);
    }
    const handleDoctor3 = () => {
        setIsClicked3(!isClicked3);
        setIsClicked2(false);
        setIsClicked1(false);
    }
    const handleSetStep = () => {
        setIsStep(4);
        window.scrollTo(0, 0);
      };
    return (
        <div className="w-full bg-[rgba(243,243,243)] flex -webkit-flex flex-col justify-start items-center h-auto min-h-[100vh]">
            <div className=" lg:max-w-[820px] lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm w-full px-[15px] mb-12">
                <h2 className="md:text-[36px] text-[24px] text-[#161616] font-extrabold leading-[3.2rem]">
                    Ihr Arzt
                </h2>
                <p className=" text-[16px] md:text-[16px] mt-[40px] mb-[40px]">Bitte wählen Sie den Arzt, der ihre Cannabis-Therapie starten soll</p>
                <Doctor isClicked={isClicked1} onClick={handleDoctor1} docImg="/Img/doctor1" countryImg="/Icon/Group1.png" countryname="Slovenien" major="Facharzt für Allgemein-Medizin" time={12} isVideo={true} />
                <Doctor isClicked={isClicked2} onClick={handleDoctor2} docImg="/Img/doctor2" countryImg="/Icon/Group3.png" countryname="Deutschland" major="Phychologie" time={6} isVideo={false} />
                <Doctor isClicked={isClicked3} onClick={handleDoctor3} docImg="/Img/doctor3" countryImg="/Icon/Spain.png" countryname="Deutschland" major="Radiologie" time={6} isVideo={false} />
                <Button
                    content="Auswahl bestätigen"
                    onClick={() => handleSetStep()}
                    className=" w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)]
           rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white sm:mb-[130px] mb-[80px]"
                />
            </div>
        </div>
    );
};

export default ChooseDoctorPage;
