'use client'

import React, { useEffect } from 'react'
import Radiobtn from '../../atoms/medical_history_form/Radiobtn';
import RadiobtnChecked from '../../atoms/medical_history_form/RadiobtnChecked';
import MHistoryNoRemoteAlert from '../../atoms/medical_history_form/MHistoryNoRemoteAlert';

interface IPInfoFirst {
  setPIFirst: (value: boolean) => void;
  pIFirst: boolean;
}

const PInfoFirstCheck: React.FC<IPInfoFirst> = ({ setPIFirst, pIFirst }) => {
  useEffect(() => {
   
  }, [pIFirst])
  return (
    <div className="w-full h-auto bg-white flex -webkit-flex flex-col justify-between mx-auto  border-b border-solid border-[#00000012]">
      <p className=" text-[16px] font-normal">
        Verstehen Sie, dass Sie nach dem Konsum von Cannabis mindestens 8 Stunden oder länger, je nach Ihrem Zustand, keine Fahrzeuge und mechanischen Maschinen führen dürfen?
        <span className="text-alert-red font-bold">*</span>
      </p>
      <div className="flex -webkit-flex mt-[16px]  mb-5">
        <RadiobtnChecked
          name="acc1"
          content="Ja"
          className="w-[50%]"
          onChange={() => setPIFirst(true)}
        />
        <Radiobtn
          name="acc1"
          className=""
          content="Nein"
          onChange={() => setPIFirst(false)}
        />
      </div>
      <div
        className={` ${pIFirst === false
          ? "py-[10px] px-6 bg-[#D7000D08] sm:w-[360px] w-full rounded-[20px] mr-0 ml-auto flex -webkit-flex justify-end items-center mb-4"
          : "hidden"
          }`}
      >
        <MHistoryNoRemoteAlert />
      </div>
      <div>

      </div>
    </div>
  )
}

export default PInfoFirstCheck
