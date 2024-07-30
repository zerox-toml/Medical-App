import React, { useState } from "react";
import Image from "next/image";
import vanguardUrl from "../../../public/Icon/secure.png";
import CardComponent from "./CardComponent";
import { CardPaymentData } from "../../../data";
import InputDefault from "./InputDefault";
import PInfoCheckboxItem from "../p_information/PInfoCheckboxItem";
import MHistroyHerr from "../../atoms/medical_history_form/MHistroyHerr";
import Radiobtn from "../../atoms/medical_history_form/Radiobtn";
import RadiobtnChecked from "../../atoms/medical_history_form/RadiobtnChecked";
import { useSelector } from "react-redux";

interface ILastAgree {
  chageAGB: boolean;
  setChageAGB: (value: boolean) => void;
  chageDaten: boolean;
  setChageDaten: (value: boolean) => void;
  lastCheck1: boolean;
  setLastCheck1: (value: boolean) => void;
  lastCheck2: boolean;
  setLastCheck2: (value: boolean) => void;
  lastValidErrors : boolean
}

const PaymentMethod: React.FC<ILastAgree> = ({
  chageAGB,
  setChageAGB,
  chageDaten,
  setChageDaten,
  lastCheck1,
  setLastCheck1,
  lastCheck2,
  setLastCheck2,
  lastValidErrors
}) => {
  const alertAGB = useSelector((state: any) => state.counter.alertAGB);
  const alertDaten = useSelector((state: any) => state.counter.alertDaten);
  const alertLCheck1 = useSelector((state: any) => state.counter.alertLCheck1);
  const alertLCheck2 = useSelector((state: any) => state.counter.alertLCheck2);

  const [kartennummer, setKartennummer] = useState();
  const [ablaufdatum, setAblaufdatum] = useState();
  const [cVV, setCVV] = useState();
  const [vorname, setVorname] = useState();
  const [nachname, setNachname] = useState();

  const [changeCheck, setChangeCheck] = useState(false);

  // second
  const [bStrabe, setBStrabe] = useState();
  const [billPost, setBillPost] = useState();
  const [bOrt, setBOrt] = useState();
  const [agreeGTC, setAgreeGTC] = useState(false);

  const [selectedCardNumber, setSelectedCardNumber] = useState<number>();

  const handleCheck = () => {
    if (changeCheck) setChangeCheck(false);
    else setChangeCheck(true);
  };
  const handleAGB = () => {
    if (chageAGB) setChageAGB(false);
    else setChageAGB(true);
  };
    
  const handleDaten = () => {
    if (chageDaten) setChageDaten(false);
    else setChageDaten(true);
  };
  
  const handleLastCheck1 = () => {
    if (lastCheck1) setLastCheck1(false);
    else setLastCheck1(true);
  };
  const handleLastCheck2 = () => {
    if (lastCheck2) setLastCheck2(false);
    else setLastCheck2(true);
  };
  const onClick = (key: number) => {
    setSelectedCardNumber(key);
  };
  return (
    <div className="max-w-[820px] sm:w-full sm:p-[50px] p-6 text-custom-black bg-white rounded-[30px]">
      <h2 className="text-xl font-extrabold">
        Bitte wählen Sie die Zahlungsmethode
      </h2>
      <div className="bg-[#F3F3F3] rounded-[20px] p-5 flex -webkit-flex items-start mt-6 gap-4 shadow-top-grey">
        <Image src={vanguardUrl} alt="vanguard" width={32} height={36} />
        <div className="flex -webkit-flex flex-col justify-start">
          <h3 className="text-base font-extrabold">
            Zahlung 100% sicher und geschützt
          </h3>
          <p className="text-base">
            Vivamus diam volutpat aliquam volutpat massa sollicitudin posuere.
            Cras est semper ullamcorper pretium convallis a faucibus donec.
          </p>
        </div>
      </div>
      <div className="flex -webkit-flex gap-3 mt-[30px] flex-wrap justify-center">
        {CardPaymentData.map((c) => (
          <CardComponent
            onClick={onClick}
            key={c.cardIndex}
            cardNum={c.cardIndex}
            imgUrl={c.imgUrl}
            cardName={c.cardName}
            selected={c.cardIndex === selectedCardNumber}
            cardWidth={c.cardWidth}
            cardHeight={c.cardHeight}
          />
        ))}
      </div>

      <div className="mt-[30px] border-b  border-b-custom-border-grey  flex -webkit-flex flex-col flex-wrap pb-[30px] md:pb-8">
        <div className="flex -webkit-flex gap-4 flex-wrap justify-between">
          <InputDefault
            inputContent={kartennummer}
            setInputContent={setKartennummer}
            content={"setKartennummer"}
            className="md:w-[60%] w-full"
          />
          <div className="md:w-[37%] w-full flex -webkit-flex gap-4 flex-wrap justify-between">
            <InputDefault
              inputContent={ablaufdatum}
              setInputContent={setAblaufdatum}
              content={"Ablaufdatum"}
              className="md:w-[46%] sm-[48%] w-[46%]"
            />
            <InputDefault
              inputContent={cVV}
              setInputContent={setCVV}
              content={"CVV"}
              className="md:w-[46%] sm-[48%] w-[46%]"
            />
          </div>
        </div>
        <div className="flex -webkit-flex justify-center gap-4 mt-4 flex-wrap">
          <InputDefault
            inputContent={vorname}
            setInputContent={setVorname}
            content={"Vorname"}
            className="sm:w-[48%] w-full"
          />
          <InputDefault
            inputContent={nachname}
            setInputContent={setNachname}
            content={"Nachname"}
            className="sm:w-[48%] w-full"
          />
        </div>
      </div>
      <div className="mt-[30px] border-b border-custom-border-grey pb-[30px] ">
        <h2 className="font-extrabold text-xl mb-2">Rechnungsadresse</h2>
        <PInfoCheckboxItem
          content="Die Lieferadresse ist identisch mit der Rechnungsadresse."
          onChange={() => handleCheck()}
          checked={changeCheck}
          style={{ color: "#6D6D6D" }}
        />
        <div
          className={`multi-select ${
            changeCheck
              ? "flex -webkit-flex flex-wrap gap-4 disable-attr justify-between"
              : "flex -webkit-flex flex-wrap gap-4 justify-between"
          }`}
        >
          <InputDefault
            inputContent={bStrabe}
            setInputContent={setBStrabe}
            content={"Straße und Hausnummer"}
            className="sm:w-[47%] w-full"
          />
          <InputDefault
            inputContent={billPost}
            setInputContent={setBillPost}
            content={"Postleitzahl"}
            className="sm:w-[47%] w-full"
          />
          <InputDefault
            inputContent={bOrt}
            setInputContent={setBOrt}
            content={"Ort"}
            className="sm:w-[47%] w-full"
          />
          <div className="sm:w-[47%] w-full">
            <MHistroyHerr
              optionInfo="Deutschland"
              option={["England", "France", "Netherlands"]}
              className="w-full"
              cId={2}
            />
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <p className="text-custom-black text-base">
          Ich erkläre mich hiermit mit den Allgemeinen Geschäftsbedingungen
          (AGBs) und der Datenschutzerklärung einverstanden.{" "}
          <span className="text-alert-red">*</span>
        </p>
        <div className="flex -webkit-flex md:flex-row flex-col gap-4 mt-[16px] ">
          <RadiobtnChecked
            name="acc1"
            content="Ja"
            className="w-[50%]"
            onChange={() => setAgreeGTC(true)}
          />
          <Radiobtn
            name="acc1"
            className=""
            content="Nein"
            onChange={() => setAgreeGTC(false)}
          />
        </div>
        <div className="flex -webkit-flex md:flex-row flex-col flex-wrap border-b border-custom-border-grey pb-[30px]">
          <div className="flex -webkit-flex flex-col md:w-[45%] w-full">
            <h4 className="text-normal-text md:mb-4 mb-2 md:mt-5 mt-6 font-normal">
              AGBs<span className="text-alert-red">*</span>{" "}
            </h4>
            <PInfoCheckboxItem
              content="Ich stimme hiermit den"
              content1=" Allgemeinen Geschäftsbedingungen"
              content2=" zu"
              onChange={() => handleAGB()}
              checked={chageAGB}
              lastValidErrors = {lastValidErrors}
              custom_content_style={(!lastValidErrors && !chageAGB) ? 'text-alert-red' : '#6D6D6D'}

            />
          </div>
          <div className={`"flex -webkit-flex flex-col md:w-[45%] w-full"`}>
            <h4 className={`text-normal-text md:mb-4 mb-2 md:mt-5 mt-4 font-normal`}>
              Datenschutzerklärung<span className="text-alert-red">*</span>{" "}
            </h4>
            <PInfoCheckboxItem
              content="Ich erkläre mich hiermit mit der"
              content1=" Datenschutzerklärung"
              content2=" einverstanden."
              onChange={() => handleDaten()}
              checked={chageDaten}
              custom_content_style={(!lastValidErrors && !chageDaten) ? 'text-alert-red' : '#6D6D6D'}
            />
          </div>
        </div>
        <div className=" flex -webkit-flex flex-col">
          <div className={` bg-custom-pink ${(!lastValidErrors && !lastCheck1) && 'border-red-700 border'}  p-5 rounded-[20px] mt-[30px]` }>
            <PInfoCheckboxItem
              content="Ich erkläre mich damit einverstanden, dass die Gesundheitsdaten, die ich im Rahmen der Beantragung eines Rezepts über diese Webseite mit einem Arzt und/oder einer Apotheke teile, von nicht-medizinischem Personal eingesehen werden können, um eventuelle Rückfragen zu klären. Diese Zustimmung kann ich jederzeit für die Zukunft über den Kundensupport unter support@privatrezept.net widerrufen."
              content3="*"
              onChange={() => handleLastCheck1()}
              checked={lastCheck1}
              style={{ color: "#6D6D6D !important" }}
              classAlertBorder={alertLCheck1 ? "border-alert-red border-[2px]" : ""}
            />
          </div>
          <div className={`bg-custom-pink p-5 rounded-[20px] mt-[30px] ${(!lastValidErrors && !lastCheck2) && 'border-red-700 border'} `}>
            <PInfoCheckboxItem
              content="Ich bestätige hiermit, dass alle Angaben nach bestem Wissen und Gewissen und wahrheitsgetreu gemacht wurden. Mir ist bewusst, dass falsche Angaben meiner Gesundheit schaden können und nach deutschem Recht strafbar sind. Jegliche Diagnosen und Behandlungsempfehlungen sind ausschließlich für meinen persönlichen Gebrauch vorgesehen."
              content3="*"
              onChange={() => handleLastCheck2()}
              checked={lastCheck2}
              style={{ color: "#6D6D6D !important" }}
              classAlertBorder={alertLCheck2 ? "border-alert-red border-[2px]" : "border-0"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
