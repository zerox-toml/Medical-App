import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

interface ICheckBox {
  id?: string;
  content?: string;
  content1?: string;
  content2?: string;
  content3?: string;
  classAlertBorder?: string;
  lastValidErrors?: boolean;
  custom_content_style?: string;
  key?:number,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
}

const PInfoCheckboxItem: React.FC<ICheckBox> = ({
  content,
  onChange,
  disabled,
  classAlertBorder,
  checked,
  style,
  content1,
  content2,
  content3,
  lastValidErrors,
  custom_content_style,
  id
}) => {
 

  
  return (
    <div
      className={` inline-flex -webkit-flex max-md:items-start items-start w-full max-md:mt-4`}
    >
      <label
        className={`relative   flex -webkit-flex items-start rounded-full cursor-pointer mt-px`}
        style={style}
      >
        <input
          type="checkbox"
          className="before:content[''] border-custom-purple text-[16px] peer relative h-4 w-4 cursor-pointer appearance-none border-2 rounded mt-[2px] border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block   before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-white before:opacity-0 before:transition-opacity checked:bg-custom-purple checked:before:bg-white hover:before:opacity-10"
          id={content}
          onChange={onChange}
          disabled={disabled}
          checked={checked}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        className={`mt-px font-light ${custom_content_style}  ml-2 select-none`}
        style={style}
        htmlFor={content}
      >
        {content}
        <Link href = "#"><span className="text-custom-purple cursor-pointer hover:">{content1}</span></Link>
        {content2}
        <span className="text-alert-red">{content3}</span>
      </label>
    </div>
  );
};

export default PInfoCheckboxItem;
