"use client";
import React, { useEffect, useState } from "react";
import InputDefault from "./InputDefault";
import MHistroyHerr from "../../atoms/medical_history_form/MHistroyHerr";
import {
  setGPostNumber,
  setGStreet,
  setgNarName,
  setgOrt,
  setgVorName,
} from "../../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import ToggleDrop from "../../atoms/medical_history_form/ToggleDrop";

interface IValidLast {
  isGVorName?: boolean;
  isGNarName?: boolean;
  isgStreet?: boolean;
  isgPostNumber?: boolean;
  isgCVV?: boolean;
}

const Delivery: React.FC<IValidLast> = ({}) => {
  const gVorName = useSelector((state: any) => state.counter.gVorName);
  const gNarName = useSelector((state: any) => state.counter.gNarName);
  const gStreet = useSelector((state: any) => state.counter.gStreet);
  const gPostNumber = useSelector((state: any) => state.counter.gPostNumber);
  const bDeliverCountry = useSelector(
    (state: any) => state.counter.bDeliverCountry
  );
  const gOrt = useSelector((state: any) => state.counter.gOrt);
  const lastValidationErrors = useSelector(
    (state: any) => state.counter.lastValidationErrors
  );

  console.log(lastValidationErrors, "lastValidationErrors");
  
  const dispatch = useDispatch();
  const [street, setStreet] = useState("");
  const [postNumber, setPostNumber] = useState("");
  const [ort, setOrt] = useState("");
  const [vorName, setVorName] = useState("");
  const [narName, setNarName] = useState("");
  useEffect(() => {
    dispatch(setgVorName(vorName));
    dispatch(setgNarName(narName));
    dispatch(setGStreet(street));
    dispatch(setGPostNumber(postNumber));
    dispatch(setgOrt(ort));
  }, [vorName, narName, street, postNumber, ort]);
  return (
    <div className="flex -webkit-flex flex-col bg-white sm:rounded-[30px] rounded-[24px] sm:p-[50px] p-6 mt-5">
      <h1 className="text-custom-black text-xl font-extrabold">
        Lieferadresse
      </h1>
      <div className="flex -webkit-flex flex-wrap gap-4 justify-between mt-[30px] ">
        <InputDefault
          content="Vorname"
          inputContent={vorName}
          setInputContent={setVorName}
          className={`  sm:w-[48%] w-full`}
          onChange={() => dispatch(setgVorName(vorName))}
          classinput={`${
            lastValidationErrors?.gVorName && !gVorName
              ? " border border-alert-red"
              : "border-none"
          }`}
        />
        <InputDefault
          content="Nachname"
          inputContent={narName}
          setInputContent={setNarName}
          className="sm:w-[48%] w-full"
          onChange={() => dispatch(setgNarName(narName))}
          classinput={`${
            lastValidationErrors?.gNarName && !gNarName
              ? "border border-alert-red"
              : "border-none"
          }`}
        />
        <InputDefault
          content="Straße und Hausnummer"
          inputContent={street}
          setInputContent={setStreet}
          className="sm:w-[48%] w-full"
          onChange={() => dispatch(setGStreet(street))}
          classinput={`${
            lastValidationErrors?.gStreet && !gStreet
              ? "border border-alert-red"
              : "border-none"
          }`}
        />
        <InputDefault
          content="Postleitzahl"
          inputContent={postNumber}
          setInputContent={setPostNumber}
          className="sm:w-[48%] w-full"
          onChange={() => dispatch(setGPostNumber(postNumber))}
          classinput={`${
            lastValidationErrors?.gPostNumber && !gPostNumber
              ? "border border-alert-red"
              : "border-none"
          }`}
        />
        <InputDefault
          content="Ort"
          inputContent={ort}
          setInputContent={setOrt}
          className="sm:w-[48%] w-full"
          onChange={() => dispatch(setgOrt(ort))}
          classinput={`${
            lastValidationErrors?.gOrt && !gOrt
              ? "border border-alert-red"
              : "border-none"
          }`}
        />
        <div className="sm:w-[48%] w-full">
          <ToggleDrop
            optionInfo="Deutschland"
            option={["England", "France", "Netherlands"]}
            className="w-full"
            cId={2}
            customClassName={`${
              lastValidationErrors?.bDeliverCountry && !bDeliverCountry
                ? "border border-alert-red"
                : "border-none"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
