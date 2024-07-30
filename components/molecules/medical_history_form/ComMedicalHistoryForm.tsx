import React from "react";
import Image from "next/image";

const ComMedicalHistoryForm = () => {
  return (
    <div className="flex flex-col mx-auto mt-[2.5rem] gap-[1.875rem] max-[650px]:gap-[16px]">
      <div className="flex justify-start items-center max-[650px]:flex-col max-[650px]:gap-[18px]">
        <div className="flex gap-4 w-[50%] justify-start items-start max-[650px]:w-full">
          <Image src='/Icon/presctiption.png' alt="" width={18} height={22} className="w-[20px]"/>
          <span className="fustat_normal mt-[-3px] ">Wir bieten Ihnen hiermit die Möglichkeit <span className=" font-bold">Cannabis auf Rezept</span> zu erhalten.</span>
        </div>
        <div className="flex gap-4 w-[50%] justify-start items-start max-[650px]:w-full">
          <Image src='/Icon/Group.png' alt="" width={18} height={22}  className="w-[20px]"/>
          <p className="fustat_normal mt-[-3px]">Unsere Ärzte warten auf Ihre Anmeldung um mit der Online-Behandlung zu beginnen.</p>
        </div>
      </div>
      <div className="flex gap-4 justify-start items-start">
        <Image src='/Icon/Vector.png' alt="" width={18} height={22}  className="w-[20px]"/>
        <p className="fustat_normal mt-[-3px]" style={{ fontFamily: "Fustat" }}>Das Rezept wird binnen <span className=" font-bold">12-24h ausgestellt</span>, insofern nach strenger Einzelfallprüfung ein persönlicher Arzt-Kontakt nicht notwendig ist.</p>
      </div>
      <div
        className="text-xs text-custom-grey"
        style={{ fontFamily: "Fustat" }}
      >
        Bitte beachten Sie: <br></br>Ihre Anfrage ist ein unverbindlicher Wunsch und der
        Arzt entscheidet, ob eine Cannabis-Therapie in Frage kommt und welche
        Blüten für die Behandlung geeignet sind. Sollte eine Behandlung für Sie
        nicht geeignet sein, so wird die Behandlungsgebühr unverzüglich
        rückerstattet.
      </div>
    </div>
  );
};

export default ComMedicalHistoryForm;
