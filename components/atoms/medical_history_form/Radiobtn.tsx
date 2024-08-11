import React from "react";

interface RadiobtnProps {
  content: string;
  className: string;
  name: string;
  onChange: any;
}

const Radiobtn: React.FC<RadiobtnProps> = ({
  content,
  className,
  name,
  onChange,
}) => {
  return (
    <div
      className={`flex -webkit-flex items-start justify-start cursor-pointer gap-[8px] ${className}`}
      onChange={onChange}
    >
      <input
        type="radio"
        name={name}
        value=""
        className="custom-radio text-custom-purple !w-[15px] !min-w-[15px] text-[16px] !h-[15px] mt-1"
      />
      <label className=" text-gray-700" onChange={onChange}>{content}</label>
    </div>
  );
};

export default Radiobtn;
