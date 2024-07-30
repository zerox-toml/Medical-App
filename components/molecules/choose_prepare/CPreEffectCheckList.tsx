import React, { useEffect, useState } from "react";
import PInfoCheckboxItem from "../p_information/PInfoCheckboxItem";
import { FilterProps } from "../../../type/FilterProps";

interface EffectProps {
  reseted?: boolean;
  filterObject: FilterProps;
  setFilterObject: (value: FilterProps) => void;
  list?: any
}

const CPreEffectCheckList: React.FC<EffectProps> = ({
  reseted,
  filterObject,
  setFilterObject,
  list
}) => {
  const len = list?.length;
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    Array(len ?? 11).fill(false)
  );
  useEffect(() => {
    setCheckedStates(Array(len ?? 11).fill(false));
  }, [reseted])
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const handleCheckboxChange = (index: number) => {

    const newState = checkedStates.map((state, i) => (i === index ? !state : state));
    setCheckedStates(newState);

    let checkedEff: Array<string> = [];
    list?.forEach((p: string, i: number) => {
      if (newState[i]) {
        checkedEff.push(p);
      }
    });
    setFilterObject({ ...filterObject, checkedEffect: checkedEff });
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => (prevCount === 6 ? prevCount + 5 : 6));
  };

  return (
    <>
      {list?.slice(0, visibleCount).map((p: string, index: number) => (
        <PInfoCheckboxItem
          key={index}
          content={p}
          onChange={() => handleCheckboxChange(index)}
          disabled={false}
          checked={checkedStates[index]}
          style={{ opacity: 1 }}
        />
      ))}
      <span
        onClick={handleShowMore}
        className="cursor-pointer text-custom-purple decoration-custom-purple underline"
      >
        {visibleCount === 6 ? "mehr anzeigen" : "weniger anzeigen"}
      </span>
    </>
  );
};

export default CPreEffectCheckList;
