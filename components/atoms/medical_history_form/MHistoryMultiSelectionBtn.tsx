import React from "react";

interface MultiSelectTitle {
  title: string;
  isSelected: boolean;
  onSelect: (title: string) => void;
}

const MHistoryMultiSelectionBtn: React.FC<MultiSelectTitle> = ({ title, isSelected, onSelect }) => {
  
  const handleClick = () => {
    onSelect(title);
  };

  return (
    <div 
      onClick={handleClick} 
      className={`text-[14px] font-normal w-auto  px-[16px] py-[4px] cursor-pointer flex justify-center items-center hover:bg-custom-purple hover:opacity-70 rounded-[3.75rem] active:opacity-50
         hover:text-white transition-all duration-100 ease-in-out ${isSelected ? "bg-custom-purple text-white" : 'bg-[rgba(65,5,126,0.07)] text-[rgba(54,54,54,1)]'}`}
    >
      {title}
    </div>
  );
};

export default MHistoryMultiSelectionBtn;
