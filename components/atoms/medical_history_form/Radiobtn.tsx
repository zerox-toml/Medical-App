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
    <div className={`flex items-start justify-start gap-[8px] ${className}`}>
      <input
        type="radio"
        name={name}
        value=""
        onChange={onChange}
        className="custom-radio text-custom-purple !w-[15px] !min-w-[15px] !h-[15px] mt-1"
      />
      <label className=" text-gray-700">{content}</label>
    </div>
  );
};

export default Radiobtn;
