import React, { useState } from "react";
import Image from "next/image";

interface ICardProps {
  imgUrl: string;
  cardName: string;
  cardWidth: number;
  cardHeight: number;
  onClick: (value: number, value2: string) => void;
  cardNum: number;
  cardType: string;
  selected: boolean;
}

const CardComponent: React.FC<ICardProps> = ({
  imgUrl,
  cardName,
  cardWidth,
  cardHeight,
  onClick,
  cardNum, 
  cardType, 
  selected
}) => {
  const [cardChecked, setCardChecked] = useState(false);
  const handleCardClickChange = () => {
    if (cardChecked == true) setCardChecked(false);
  };
  return (
    <div
      className={`flex -webkit-flex flex-col  justify-between items-center rounded cursor-pointer  sm:w-[134px] w-full`}
      onClick={() => onClick(cardNum, cardType)}
    >
      <div className={`${selected ? 'bg-[#41057E12] border-[3px] border-custom-purple' : "bg-[#ffffff]"} shadow mb-1 hover:border-custom-purple rounded-[10px] w-full h-[77px] flex -webkit-flex justify-center items-center hover:bg-[#0000000D] `}>
        <Image
          src={imgUrl}
          alt="Payment"
          width={cardWidth}
          height={cardHeight}
        />
      </div>
      <p className="text-custom-grey text-sm">{cardName}</p>
    </div>
  );
};

export default CardComponent;
