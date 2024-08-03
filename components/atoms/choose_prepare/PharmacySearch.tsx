'use client'
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";


interface SearchNameKeyword {
  name: string,
  kolin: string
}

interface PharmacySearchProps {
  setDropdownVisible: any,
  clicked: any;
  onClick: any;
  dropdownVisible: any;
  onChange?: (type: any) => void,
  searchedPharmacy?:any
}
export const PharmacySearch: React.FC<PharmacySearchProps> = ({ onChange, searchedPharmacy, setDropdownVisible, onClick, clicked, dropdownVisible }) => {
  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  useEffect(() => {
  }, [dropdownVisible])

  return (
    <>
      <div className="inline-block w-full gap-1 md:gap-1 -mt-4 dropdown">
        <div className=" w-full flex -webkit-flex h-9 py-2 px-5 rounded-[60px] bg-[#F5F5F5]">
          <input
            type="text"
            onChange={(e) => onChange && onChange(e.target.value)}
            placeholder={clicked ? clicked.name : "Suchen"}
            className="border-0 w-full bg-[#F5F5F5] text-[16px] max-md:text-[0.75rem] focus:outline-none"
            onClick={toggleDropdown}
          />
          <div className="w-auto">
            <IoSearchOutline />
          </div>
        </div>
        {dropdownVisible && (
          <ul
            tabIndex={0}
            className="multi-select absolute z-50 dropdown-content menu bg-white rounded-box p-2 shadow w-full mt-2 "
          >
            {searchedPharmacy.map((o: any, index: number) => (
              <li
                className="text-[#161616] hover:bg-[rgb(243,237,246)]  hover:text-[#41057E]"
                key={index}
                onClick={() => onClick(o)}
              >
                <span className="flex -webkit-flex justify-between w-full">
                  <a className="">{o.name}</a>
                  <a className="">{o.zip && o.zip} {o.city && o.city}</a>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
