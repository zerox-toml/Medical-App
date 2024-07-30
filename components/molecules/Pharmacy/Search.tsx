import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PharmacySearch } from "../../atoms/choose_prepare/PharmacySearch";

interface SearchProps {
  onClick?: (type: any) => void;
  onChange?: (type: any) => void;
  setDropdownVisible?: any;
  clicked: any;
  dropdownVisible: any;
  searchedPharmacy: any;
}

const searchNameKeywordMockData = [
  {
    name: "Dom Apotheke Köln",
    kolin: "50667 Köln",
  },
  {
    name: "Apotheke am Bahnhof",
    kolin: "82110 Germering",
  },
  {
    name: "Apotheke am Neumarkt",
    kolin: "50667 Köln",
  },
  {
    name: "Birken-Apotheke",
    kolin: "50674 Köln",
  },
  {
    name: "Pro Vita Apotheke",
    kolin: "50823 Köln",
  },
];

const searchAddressKeywordMockData = [
  {
    name: "Dom Apotheke Köln",
    kolin: "800m",
  },
  {
    name: "Apotheke am Bahnhof",
    kolin: "900 m",
  },
  {
    name: "Apotheke am Neumarkt",
    kolin: "1,4 km",
  },
  {
    name: "Birken-Apotheke",
    kolin: "9,9 km",
  },
  {
    name: "Pro Vita Apotheke",
    kolin: "3,5 km",
  },
];

const Search: React.FC<SearchProps> = ({
  onClick,
  onChange,
  setDropdownVisible,
  clicked,
  dropdownVisible,
  searchedPharmacy,
}) => {
  const [isName, setIsName] = useState(true);

  const handleClick = () => {
    setIsName(!isName);
  };

  return (
    <div
      className={`flex -webkit-flex justify-between h-fit overflow-x-hidden items-center md:px-[30px] px-[24px] md:py-[64px] py-[78px] box-border bg-[#ffffff]  rounded-[30px] w-full mb-[12px] transition-all`}
    >
      <div className=" flex -webkit-flex flex-col items-start justify-start w-full h-full">
        <p className=" text-5 font-extrabold text-[#0D0D0D]">
          Wählen Sie Ihre Apotheke
        </p>
        <div
          className={`px-[24px] w-full py-[10px] flex -webkit-flex gap-[10px] justify-start items-start mt-6 bg-[rgb(253,247,247)] rounded-[30px]`}
        >
          <div className="">
            <Image
              src="/Img/warning.png"
              className=" mt-[3px]"
              alt=""
              width={16}
              height={16}
            />
          </div>
          <p className=" text-[#D7000D] text-[16px] w-[90%]">
            Warnung: Die Nutzung von nicht empfohlenen Apotheken kann zu
            Lieferverzögerungen führen. Wir können nicht garantieren, dass die
            ausgewählte Apotheke die Fristen einhalten wird
          </p>
        </div>
        <div className=" mt-[54px] w-full h-full">
          <div className=" flex -webkit-flex items-center w-full">
            <div
              onClick={handleClick}
              className={`w-[59px] h-[50px] cursor-pointer rounded-t-[10px] -mt-[35px] z-[0] px-[10px] py-[10px] text-[14px] font-bold  flex -webkit-flex justify-center items-start ${
                isName
                  ? "bg-[#41057E] text-white"
                  : "bg-[rgb(234,229,237)] text-[#363636]"
              } `}
            >
              Name
            </div>
            {/* <div onClick={handleClick} className={`w-[59px] h-[50px] cursor-pointer rounded-t-[10px] -mt-[35px] z-[0] px-[10px] py-[10px] text-[14px] font-bold  flex -webkit-flex justify-center items-start ${!isName ? "bg-[#41057E] text-white" : "bg-[rgb(234,229,237)] text-[#363636]"} `}>Adresse</div> */}
          </div>
          <div className=" absolute flex -webkit-flex md:flex-row flex-col md:gap-[20px] gap-6">
            <div className="relative md:w-[475px] flex -webkit-flex h-full">
              {/* {isName ? */}
              <PharmacySearch
                onChange={onChange}
                searchedPharmacy={searchedPharmacy}
                onClick={onClick}
                clicked={clicked}
                dropdownVisible={dropdownVisible}
                setDropdownVisible={setDropdownVisible}
              />
              {/* : */}
              {/* <PharmacySearch onChange={onChange} onClick={onClick} clicked={clicked} dropdownVisible={dropdownVisible} setDropdownVisible={setDropdownVisible} /> */}
              {/* } */}
            </div>
            <div className=" flex -webkit-flex flex-col gap-[2px] mt-[-20px] h-fit">
              <span className=" text-[#363636] text-[16px]">
                ausgewälte Apotheke:
              </span>
              <span className=" text-[#41057E] text-[16px] font-extrabold">
                Pelican Apotheke
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
