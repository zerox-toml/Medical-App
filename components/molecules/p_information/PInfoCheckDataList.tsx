"use client";
import React, { useState, useEffect } from "react";
import { PInfoCheckBoxData } from "../../../data";
import { setGCheckedContents } from "../../../redux/counterSlice";
import PInfoCheckboxItem from "./PInfoCheckboxItem";
import { useDispatch, useSelector } from "react-redux";
import MHistoryNoRemoteAlert from "../../atoms/medical_history_form/MHistoryNoRemoteAlert";

interface IListCheckState {
  isListChecked: boolean;
  setIsListChecked: (value: boolean) => void;
}

const PInfoCheckDataList: React.FC<IListCheckState> = ({
  isListChecked,
  setIsListChecked,
}) => {
  const dispatch = useDispatch();
  const [checkedStates, setCheckedStates] = useState<boolean[]>([]);
  const gCheckedContents = useSelector(
    (state: any) => state.counter.gCheckedContents
  );
  useEffect(() => {
    if (gCheckedContents[0] == "Nein, es liegen keine Ausschlusskriterien vor") {
      setIsListChecked(true);
    } else setIsListChecked(false);
  }, [gCheckedContents, setIsListChecked]);

  useEffect(() => {
    const initialState = PInfoCheckBoxData.map((_, index) => index === 0);
    setCheckedStates(initialState);
  }, []);

  const handleCheckboxChange = (index: number) => {
    if (index === 0) {
      const newState = checkedStates.map((_, i) =>
        i === 0 ? !checkedStates[0] : false
      );
      setCheckedStates(newState);
    } else if (!checkedStates[0]) {
      const newState = checkedStates.map((state, i) =>
        i === index ? !state : state
      );
      setCheckedStates(newState);
    }
  };

  useEffect(() => {
    const checkedContents = PInfoCheckBoxData.filter(
      (_, index) => checkedStates[index]
    ).map((item) => item.content);
    dispatch(setGCheckedContents(checkedContents));
  }, [checkedStates, dispatch]);

  return (
    <>
      {PInfoCheckBoxData.map((p, index) => (
        <div key={index}>
          <PInfoCheckboxItem
            key={index}
            content={p.content}
            onChange={() => handleCheckboxChange(index)}
            disabled={index !== 0 && checkedStates[0]}
            checked={checkedStates[index]}
            style={{ opacity: index !== 0 && checkedStates[0] ? 0.6 : 1 }}
          />
          <div
            className={`${
              checkedStates[index] && p.pinfo == 1
                ? "flex py-[10px] px-6 bg-[#D7000D08] w-full rounded-[20px] mr-0 ml-auto -webkit-flex justify-end items-center mb-4"
                : "hidden"
            }`}
          >
            <MHistoryNoRemoteAlert />
          </div>
        </div>
      ))}
    </>
  );
};

export default PInfoCheckDataList;
