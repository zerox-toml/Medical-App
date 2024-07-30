import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

interface IFilterProps {
  showFilter: boolean;
  setShowFilter: (value: any) => void;
}

const CPreFilter: React.FC<IFilterProps> = ({ showFilter, setShowFilter }) => {
    const handleClick = () => {
        setShowFilter(!showFilter);
      };
  return (
    <div className={`md:hidden flex -webkit-flex w-full bg-white rounded-t-[10px] shadow-top-only  relative z-10 justify-center items-center py-2 text-[#41057E] gap-2 cursor-pointer`} onClick={handleClick} >
      Filter
      <div className={`multi-select ${showFilter ? "hidden" : "block"}`}>
        <FaChevronDown color="#41057E"/>
      </div>
      <div className={`multi-select ${showFilter ? "block" : "hidden"}`}>
        <FaChevronUp color="#41057E"/>
      </div>
    </div>
  );
};

export default CPreFilter;
