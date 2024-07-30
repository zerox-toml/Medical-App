'use client'

import React, {useEffect} from 'react'
import  Radiobtn from '../../atoms/medical_history_form/Radiobtn';
import  RadiobtnChecked from '../../atoms/medical_history_form/RadiobtnChecked';

interface IPInfoFirst {
    setPIFirst: (value: boolean) => void;
    pIFirst: boolean;
  }

const PInfoFirstCheck:React.FC<IPInfoFirst> = ({setPIFirst, pIFirst}) => {
    useEffect(() => {
        
      }, [pIFirst])
  return (
    <div className="w-full h-auto bg-white flex flex-col justify-between mx-auto  border-b border-solid border-[#00000012]">
      <p className=" text-[16px] font-normal">
      Verstehen Sie, dass Sie nach dem Konsum von Cannabis mindestens 8 Stunden oder länger, je nach Ihrem Zustand, keine Fahrzeuge und mechanischen Maschinen führen dürfen?
        <span className="text-alert-red font-bold">*</span>
      </p>
      <div className="flex mt-[16px]  mb-5">
        <Radiobtn
          name="acc1"
          content="Ja"
          className="w-[50%]"
          onChange={() => setPIFirst(true)}
        />
        <RadiobtnChecked
          name="acc1"
          className=""
          content="Nein"
          onChange={() => setPIFirst(false)}
        />
      </div>
     <div>
    
     </div>
    </div>
  )
}

export default PInfoFirstCheck
