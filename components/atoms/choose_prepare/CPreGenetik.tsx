"use client";
import React, { useState } from "react";
import MHistoryMultiSelectionBtn from "../medical_history_form/MHistoryMultiSelectionBtn";
import { FilterProps } from "../../../type/FilterProps";

const CPreGenetikData = [
  { gene: "Indika" },
  { gene: "Sativa" },
  { gene: "Hybrid" },
];

interface IGenetik {
  filterObject: FilterProps;
  setFilterObject: (value: object) => void;
}

const CpreGenetik:React.FC<IGenetik> = ({filterObject, setFilterObject}) => {
  
  const genetik = filterObject.genetik;
  const handleSelection = (genetik: string) => {
    const filterObj = filterObject;
    setFilterObject({...filterObj, genetik:genetik});
  };
  
  return (
    <div>
      <p className="title2">Genetik</p>
      <div className="w-auto flex flex-wrap gap-2 mt-[24px] sm:justify-start justify-center">
        {CPreGenetikData.map((symp, index) => (
          <MHistoryMultiSelectionBtn
            key={index}
            title={symp.gene}
            isSelected={genetik === symp.gene}
            onSelect={handleSelection}
          />
        ))}
      </div>
    </div>
  );
};

export default CpreGenetik;
