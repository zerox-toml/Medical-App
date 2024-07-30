export interface FilterProps {
  search?: string;
  valueMinTHC?: number;
  valueMaxTHC?: number;
  valueMinCBD?: number;
  valueMaxCBD?: number;
  genetik?: string;
  checkedEffect?: string[];
  checkedTerpene?: string[];
  checkedSymptoms?: string[];
  domina?: string;
  minPrice?: number;
  maxPrice?: number;
  irradiated?:boolean
}

export interface IStepProps {
  isStep: number;
  setIsStep: (value: number) => void;
}