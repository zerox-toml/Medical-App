import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { FilterProps } from "../../../type/FilterProps";
import { useEffect } from "react";

interface priceRange {
  filterObject: FilterProps;
  setFilterObject: (value: FilterProps) => void;
}

function valuetext(value: number) {
  return `${value}`;
}

const CprePriceRange: React.FC<priceRange> = ({
  filterObject,
  setFilterObject,
}) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setFilterObject({
        ...filterObject,
        minPrice: newValue[0],
        maxPrice: newValue[1],
      });
    }
  };

  return (
    <div>
      <Box
        className="w-full md:w-[235px]"
        sx={{
          "@media (min-width: 768px)": {
            width: 235,
          },
        }}
      >
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={[filterObject.minPrice ?? 1, filterObject.maxPrice ?? 100]}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <div className="flex -webkit-flex gap-1 justify-center">
        <div className="w-[108px] h-[27px] text-base rounded-[20px] bg-[#F5F5F5] py-[2px] px-[10px] text-[#363636] flex -webkit-flex justify-start">
          {filterObject.minPrice ?? 1}€
        </div>
        <span className="border-t-2 mt-3 w-[18px] border-t-[#363636]"></span>
        <div className="w-[108px] text-base h-[27px] rounded-[20px] bg-[#F5F5F5] py-[2px] px-[10px] text-[#363636] flex -webkit-flex justify-start">
          {filterObject.maxPrice ?? 100}€
        </div>
      </div>
    </div>
  );
};
export default CprePriceRange;
