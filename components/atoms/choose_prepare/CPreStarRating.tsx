import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

interface starRate {
  rate: number;
}

const BasicRating: React.FC<starRate> = ({ rate }) => {
  const [value, setValue] = useState<number | null>(2.4);
  useEffect(() => {
    setValue(rate);
  }, []);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="half-rating-read"
        defaultValue={2}
        precision={0.2}
        value={value}
        readOnly
      />
    </Box>
  );
};

export default BasicRating;
