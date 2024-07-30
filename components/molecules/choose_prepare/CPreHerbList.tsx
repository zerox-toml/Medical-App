import React from "react";
import { PrepareHerbData } from "../../../data";
import CPreHerb from "../../atoms/choose_prepare/CPreHerb";

const CPreHerbList = () => {
  return (
    <div>
      {PrepareHerbData.map((h, index) => (
        <CPreHerb
          key={index}
          herbCBD={h.herbCBD}
          herbGenetik={h.herbGenetik}
          herbImg={h.herbImg}
          herbKultivar={h.herbKultivar}
          herbName={h.herbName}
          herbPriceFrom={h.herbPriceFrom}
          herbPriceTo={h.herbPriceTo}
          herbTHC={h.herbTHC}
          herbTalent={h.herbTalent}
        />
      ))}
    </div>
  );
};

export default CPreHerbList;
