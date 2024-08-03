"use client";
import React, { useState } from "react";
import MHistoryMultiSelectionBtn from "../medical_history_form/MHistoryMultiSelectionBtn";
import { FilterProps } from "../../../type/FilterProps";

const CPreIrradtikData = [
  { Irrad: "bestrahlt" },
  { Irrad: "unbestrahlt" },
];

interface CPreIrradProps {
  filterObject: FilterProps;
  setFilterObject: (value: FilterProps) => void;
}

const CPreIrrad: React.FC<CPreIrradProps> = ({ filterObject, setFilterObject }) => {
  const irradiated = filterObject.irradiated;
  const Irr = irradiated ? "bestrahlt" : "unbestrahlt"
  const handleSelection = (Irrad: string) => {
    Irrad === "bestrahlt" ?
      setFilterObject({ ...filterObject, irradiated: true }) :
      setFilterObject({ ...filterObject, irradiated: false })
  };

  return (
    <div>
      <p className="title2">Bestrahlung</p>
      <div className="w-auto flex -webkit-flex flex-wrap gap-2 mt-[24px]">
        {CPreIrradtikData.map((symp, index) => (
          <MHistoryMultiSelectionBtn
            key={index}
            title={symp.Irrad}
            isSelected={Irr === symp.Irrad}
            onSelect={handleSelection}
          />
        ))}
      </div>
    </div>
  );
};

export default CPreIrrad;
