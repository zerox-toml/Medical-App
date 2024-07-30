"use client";
import React from "react";
import CPreHerb from "../../atoms/choose_prepare/CPreHerb";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedHerbList } from "../../../redux/counterSlice";

const ConfirmProducts = () => {
  const dispatch = useDispatch();
  const selectedHerbList = useSelector(
    (state: any) => state.counter.selectedHerbList
  );
  const removeHerbAmount = (index: number) => {
    const selectedHerbLists = [...selectedHerbList];
    selectedHerbLists.splice(index, 1);
    dispatch(setSelectedHerbList(selectedHerbLists));
  };
  return (
    <div>
      {selectedHerbList?.map((p: any, index: any) => (
        <div key={index + 1}>
          <CPreHerb
            herbCBD={p.cbd}
            herbGenetik={p.genetic}
            // herbImg={p.imgUrl}
            herbImg="/Img/herb (9).png"
            herbKultivar={p.productClass}
            herbName={p.productName}
            herbPriceFrom={p.minPrice}
            herbPriceTo={p.maxPrice}
            herbTHC={p.thc}
            herbTalent={p.ratingsScore}
            herbAmount={p.herbAmount}
            removeHerbAmount={removeHerbAmount}
            index={index}
            classname=" shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ConfirmProducts;
