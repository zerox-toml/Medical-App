import React, { useState, useEffect } from "react";
import MHistoryMultiSelectionBtn from "../../atoms/medical_history_form/MHistoryMultiSelectionBtn";
import { MHistoryMultiData } from "../../../data";
import MHistoryDetailSymptom from "../../atoms/medical_history_form/MHistoryInputLong";
import { setSymptoms } from "../../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import {
  setValidationErrors,
  setDetailedSymptom,
} from "../../../redux/counterSlice";

interface MHistoryMultiSelectProps {
  disabled: boolean;
  symptomsFlag: number;
  detailedSymptom: string;
  validationErrors: any;
  setValidationErrors: any;
  setDetailedSymptom: any;
  setSymptoms: any;
  symptoms: any;
}

const MHistoryMultiSelect: React.FC<MHistoryMultiSelectProps> = ({
  disabled,
  symptomsFlag,
  validationErrors,
  detailedSymptom,
  setDetailedSymptom,
  setSymptoms,
  symptoms,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(symptoms ?? []);
  const dispatch = useDispatch();
  const [detailSymptom, setDetailSymptom] = useState(detailedSymptom ?? "");

  const handleDetailedSymptom = (value: any) => {
    setDetailedSymptom(value.target.value);
    setDetailSymptom(value.target.value);
  };

  const handleSelection = (title: string) => {
    setSelectedItems((selectedItems) =>
      selectedItems.includes(title)
        ? selectedItems.filter((item) => item !== title)
        : [...selectedItems, title]
    );

    setSymptoms(selectedItems);
  };
  // dispatch(setSymptoms(selectedItems));
  return (
    <div
      className={`multi-select ${
        disabled
          ? "disable-attr flex -webkit-flex w-full flex-col justify-start items-start mt-[20px] bg-white md:p-[50px] md-[24px] md:rounded-[36px] rounded-[24px]  Myshadow"
          : "w-full flex -webkit-flex flex-col justify-start items-start mt-[20px] bg-white md:p-[50px] p-[24px]  md:rounded-[36px] rounded-[24px] Myshadow"
      }`}
    >
      <h3
        className={`multi-select ${
          symptomsFlag == 0
            ? "font-extrabold text-[20px]"
            : "font-extrabold text-[20px] text-alert-red"
        }`}
      >
        Welche Symptome haben Sie?<span className=" text-alert-red">*</span>
      </h3>
      <div className="w-auto flex -webkit-flex flex-wrap gap-[16px] mt-[24px]">
        {MHistoryMultiData.map((symp, index) => (
          <MHistoryMultiSelectionBtn
            key={index}
            title={symp.title}
            isSelected={selectedItems.includes(symp.title)}
            onSelect={handleSelection}
          />
        ))}
      </div>
      <span className=" mt-[28px] text-[16px] font-normal">
        Beschreiben Sie Ihre Symptome ausführlich:
        <span className=" text-alert-red font-bold">*</span>
      </span>
      <MHistoryDetailSymptom
        value={detailSymptom}
        isInvalid={validationErrors?.detailedSymptom}
        setValue={handleDetailedSymptom}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  detailedSymptom: state.counter.detailedSymptom,
  validationErrors: state.counter.validationErrors,
  symptoms: state.counter.symptoms,
});
const mapDispatchToProps = {
  setValidationErrors,
  setDetailedSymptom,
  setSymptoms,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MHistoryMultiSelect);
