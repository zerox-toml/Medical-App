"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  setMister,
  setGender,
  setDeliverCountry,
  setBDeliverCountry,
} from "../../../redux/counterSlice";

interface IUserInfoOption {
  optionInfo: string;
  option: Array<string>;
  className?: string;
  cId?: number;
  isInvalid?: boolean;
  customClassName: string;
}

const ToggleDrop: React.FC<IUserInfoOption> = ({
  optionInfo,
  option,
  className,
  cId,
  isInvalid,
  customClassName,
}) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = (o: string) => {
    setClicked(o);
    setDropdownVisible(false);
    dispatch(setBDeliverCountry(o));
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div
      className={`relative inline-block text-left max-md:w-full ${className}`}
    >
      <div className="dropdown w-full">
        <div
          tabIndex={0}
          role="button"
          className={`text-custom-grey  text-[16px] ${customClassName} font-normal bg-[#F5F5F5] rounded-[60px] h-auto w-full px-[20px] py-[13.5px] inline-flex -webkit-flex justify-between items-center hover:bg-white`}
          onClick={toggleDropdown}
        >
          <span
            className={`multi-select ${
              optionInfo === "Deutschland"
                ? "w-[100%] text-left text-[#6D6D6D]"
                : "text-left w-[80%] text-[#363636]"
            }`}
          >
            {clicked ? clicked : optionInfo}
          </span>
          <Image src="/Icon/down.png" alt="" width={14} height={14} />
        </div>
        {dropdownVisible && (
          <ul
            tabIndex={0}
            className={`multi-select ${
              optionInfo === "Deutschland"
                ? "multi-select dropdown-content menu bg-white rounded-box z-[1] w-full p-2 shadow"
                : "multi-select dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
            }`}
          >
            {option.map((o: string, index: number) => (
              <li
                className="text-[#6D6D6D]"
                key={index}
                onClick={() => handleClick(o)}
              >
                <a>{o}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToggleDrop;
