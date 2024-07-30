import React from "react";
import Image from "next/image";

const IdVanguard = () => {
  return (
    <div className="flex  gap-3 max-w-[720px] mx-auto">
      <div className="w-[48px] h-12">
        <Image
          src="/Icon/secure.png"
          alt=""
          width={48}
          height={48}
          className="w-[48px] h-12"
        />
      </div>
      <div className="w-[100%] flex flex-col gap-2">
        <strong>Upload ist sicher und zu 100% geschützt</strong>
        <p>Wir möchten Ihnen versichern, dass der Upload Ihrer Dokumente über eine verschlüsselte Verbindung erfolgt und alle Informationen absolut vertraulich behandelt werden. Ihre Daten werden ausschließlich zur Altersverifikation genutzt und nicht an Dritte weitergegeben.</p>
      </div>
    </div>
  );
};

export default IdVanguard;
