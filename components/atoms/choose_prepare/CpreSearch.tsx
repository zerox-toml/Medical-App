"use client";
import { IoSearchOutline } from "react-icons/io5";
import { FilterProps } from "../../../type/FilterProps";

interface ISearchContent {
  searchContent: string;
  setSearchContent: (value: string) => void;
  filterObject: object;
  setFilterObject: (value: FilterProps) => void;
  showFilter?: boolean;
  className?:string;
}

const CPreSearch: React.FC<ISearchContent> = ({
  searchContent,
  filterObject,
  setFilterObject,
  setSearchContent,
  showFilter,
  className,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
    setFilterObject({ ...filterObject, search: e.target.value });
  };

  return (
    <div
      className={`${
        showFilter ? "" : `${className}`
      } bg-[#FFFFFF] md:bg-[#F5F5F5] flex -webkit-flex h-9 py-2 px-5 w-full rounded-[60px] gap-1 md:gap-1 mb-5`}
    >
      <input
        type="text"
        placeholder="Suchen"
        value={searchContent}
        className="border-0 w-full bg-[#FFFFFF] md:bg-[#F5F5F5] font-xs max-md:text-[0.75rem] focus:outline-none"
        onChange={handleInputChange}
      />
      <div className="w-auto">
        <IoSearchOutline color="#41057E99" />
      </div>
    </div>
  );
};

export default CPreSearch;
