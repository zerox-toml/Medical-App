"use client";
import React, { useState } from "react";
import InputDefault from "./InputDefault";
import MHistroyHerr from "../../atoms/medical_history_form/MHistroyHerr";
import {
  setGPostNumber,
  setGStreet,
  setgNarName,
  setgOrt,
  setgVorName,
} from "../../../redux/counterSlice";
import { useDispatch } from "react-redux";

const Delivery = () => {
  const dispatch = useDispatch();
  const [street, setStreet] = useState("");
  const [postNumber, setPostNumber] = useState("");
  const [ort, setOrt] = useState("");
  const [vorName, setVorName] = useState("");
  const [narName, setNarName] = useState("");

  return (
    <div className="flex -webkit-flex flex-col bg-white sm:rounded-[30px] rounded-[24px] sm:p-[50px] p-6 mt-5">
      <h1 className="text-custom-black text-xl font-extrabold">
        Lieferadresse
      </h1>
      <div className="flex -webkit-flex flex-wrap gap-4 justify-between mt-[30px] ">
        <InputDefault
          content="Straße und Hausnummer"
          inputContent={street}
          setInputContent={setStreet}
          className="sm:w-[48%] w-full"
          onChange={() => dispatch(setGStreet(street))}
        />
        <InputDefault
          content="Postleitzahl"
          inputContent={postNumber}
          setInputContent={setPostNumber}
          className="sm:w-[48%] w-full"
          onChange={() => dispatch(setGPostNumber(postNumber))}
        />
        <InputDefault
          content="Ort"
          inputContent={ort}
          setInputContent={setOrt}
          className="sm:w-[48%] w-full"
          onChange={() => dispatch(setgOrt(ort))}
        />
        <div className="sm:w-[48%] w-full">
          <MHistroyHerr
            optionInfo="Deutschland"
            option={["England", "France", "Netherlands"]}
            className="w-full"
            cId={1}
          />
        </div>
        <InputDefault
          content="Vorname"
          inputContent={vorName}
          setInputContent={setVorName}
          className="sm:w-[48%] w-full"
          onChange={() => dispatch(setgVorName(vorName))}
        />
        <InputDefault
          content="Nachname"
          inputContent={narName}
          setInputContent={setNarName}
          className="sm:w-[48%] w-full"
          onChange={() => dispatch(setgNarName(narName))}
        />
      </div>
    </div>
  );
};

export default Delivery;
