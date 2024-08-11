"use client";
import React, { useCallback, useEffect, useState } from "react";
import PricePrescription from "../../components/atoms/price_pay/PricePrescription";
import ConfirmProducts from "../../components/molecules/price_pay/ConfirmProducts";
import Image from "next/image";
import warningIcon from "../../public/Icon/warning.png";
import DoctorFinal from "../../components/molecules/doctor/DoctorFinal";
import InputDefault from "../../components/molecules/price_pay/InputDefault";
import Button from "../../components/atoms/Button";
import Delivery from "../../components/molecules/price_pay/Delivery";
import PaymentMethod from "../../components/molecules/price_pay/PaymentMethod";
import { setGCouponCode } from "../../redux/counterSlice";
import {
  setalertAGB,
  setalertDaten,
  setalertLCheck1,
  setalertLCheck2,
} from "../../redux/counterSlice";
import { setPageStatus, setValidationErrors, setLastValidationErrors } from "../../redux/counterSlice";
import { connect, useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface Product {
  id: number;
  productName: string;
  thc: number;
  cbd: number;
  genetic: string;
  origin: string;
  strainName: string;
  ratingsScore: number;
  ratingsCount: number;
  minPrice: number;
  maxPrice: number;
  imgUrl: string;
  effect: string[];
  medicalUsage: string;
  terpenes: string[];
  taste: string[];
  strain: string;
  manufacturer: string;
  productClass: string;
  herbAmount: number;
}

interface Productlist {
  productId: number;
  quantity: number;
}

interface pharmacy {
  email: string;
  name: string;
  website: string;
  tags: string[];
  street: string;
  zip: string;
  city: string;
  rating: number;
  imgUrl: string;
}

interface order {
  prescriptionId: number;
  pharmacyName?: string;
  products?: {
    productId: number;
    quantity: number;
  }[];
}

interface customer {
  email?: string;
  salutation?: string;
  firstName: string;
  lastName: string;
  birthdate?: string;
  phone: string;
  symptoms: string[];
  symptomsDescription: string;
  usingRegularMedication: boolean;
  regularMedication?: string;
  allergiesPresent: boolean;
  allergies?: string;
  chronicDiseasesPresent: boolean;
  chronicDiseases?: string;
  insurance?: boolean;
  vehicleMachineWarningConfirmed: boolean;
  informingMedicalPersonnelConfirmed?: boolean;
  exclusionCriteria: string[];
  customExperiences?: string;
}

interface shipping {
  street: string;
  zipCode: string;
  city: string;
  country: string;
  firstName: string;
  lastName: string;
}

interface invoice {
  identicalWithShipping: boolean;
  street?: string;
  zipCode?: string;
  city?: string;
  country?: string;
}

interface Props {
  email: string;
  tphone: string;
  fname: string;
  lname: string;
  birthday: string;
  detailedSymptom: string;
  setValidationErrors?: any;
  validationErrors?: any;
  symptoms: string[];
  regMedicine: string;
  allergiInfo: string;
  chronic: string;
  gInsurance: boolean;
  gCannvanisDrive: boolean;
  gCTKnow: boolean;
  gCheckedContents: string[];
  gAnythingelse: string;
  deliverCountry: string;
  gStreet: string;
  gPostNumber: string;
  gOrt: string;
  gVorName: string;
  gCVV: string;
  gKartennummer: string;
  gAblaufdatum: string;
  gNarName: string;
  gBStreet: string;
  gBillPost: string;
  gBillOrt: string;
  bDeliverCountry: string;
  identicalWithShipping: boolean;
  selectedHerbList: Product[];
  selectedPharmacy: pharmacy;
  prescriptionId: any;
  idCardFile: any;
  paymentType: string;
  leadId: string;
}

const PricePayMethod: React.FC<Props> = ({
  email,
  tphone,
  fname,
  lname,
  detailedSymptom,
  birthday,
  symptoms,
  regMedicine,
  allergiInfo,
  chronic,
  gInsurance,
  gCVV,
  gCannvanisDrive,
  gCTKnow,
  gCheckedContents,
  gAnythingelse,
  deliverCountry,
  gStreet,
  gPostNumber,
  gOrt,
  gVorName,
  gNarName,
  gKartennummer,
  gBStreet,
  gAblaufdatum,
  gBillPost,
  gBillOrt,
  bDeliverCountry,
  identicalWithShipping,
  selectedHerbList,
  selectedPharmacy,
  prescriptionId,
  idCardFile,
  paymentType,
  leadId,
}) => {
  const router = useRouter();

  const [chageDaten, setChageDaten] = useState(false); // privacyPolicyAccepted
  const [lastCheck1, setLastCheck1] = useState(false); //sharingWithNonMedicalStaffAccepted
  const [lastCheck2, setLastCheck2] = useState(false); // bestConscienceConfirmed
  const [lastValidErrors, setLastValidErrors] = useState(true);
  const [lastValidFlag, setLastValidFlag] = useState(0);
  const [hasErrors, setHasErrors] = useState(false);

  const dispatch = useDispatch();
  const [isClicked2, setIsClicked2] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [productList, setProductList] = useState<Productlist[]>([]);
  const [order, setOrder] = useState<order>({
    prescriptionId: 0,
    pharmacyName: "",
    products: [],
  });
  const [chageAGB, setChageAGB] = useState(false); // termAccpeted
  const [isGVorName, setisGVorName] = useState(false);
  const [isOrt, setisOrt] = useState(false);
  const [isgStreet, setisgStreet] = useState(false);
  const [isgPostNumber, setisgPostNumber] = useState(false);
  const lastValidationErrors = useSelector((state: any) => state.counter.lastValidationErrors);
  const gCouponCode = useSelector((state: any) => state.counter.gCouponCode);
  const gAgreeGTC = useSelector((state:any) => state.counter.gAgreeGTC)

  console.log(lastValidationErrors, "un");
  const [customer, setCustomer] = useState<customer>({
    email: "",
    salutation: "Hello",
    firstName: "",
    lastName: "",
    birthdate: "",
    phone: "",
    symptoms: [],
    symptomsDescription: "",
    usingRegularMedication: false,
    regularMedication: "",
    allergiesPresent: false,
    allergies: "",
    chronicDiseasesPresent: false,
    chronicDiseases: "",
    insurance: false,
    vehicleMachineWarningConfirmed: false,
    informingMedicalPersonnelConfirmed: false,
    exclusionCriteria: [],
    customExperiences: "",
  });

  const [shipping, setShipping] = useState<shipping>({
    street: "",
    zipCode: "",
    city: "",
    country: "",
    firstName: "",
    lastName: "",
  });

  const [invoice, setInvoice] = useState<invoice>({
    identicalWithShipping: false,
    street: "",
    zipCode: "",
    city: "",
    country: "",
  });
  
  const handleDoctor2 = () => {};
  useEffect(()=> {
    
  }, [setCouponCode, couponCode])
  console.log(gCouponCode, "gCouponCodedd");
  
  const applyZur = () => {
    dispatch(setGCouponCode(couponCode));

  };
  const alertcheck1 = useSelector((state: any) => state.counter.alertcheck1);

  const createCheckout = async (paymentType: string) => {
    let params: any = {};
    if (leadId) {
      params = {
        leadId,
        paymentType,
        termsAccepted: true,
        privacyPolicyAccepted: true,
        sharingWithNonMedicalStaffAccepted: true,
        bestConscienceConfirmed: true,
        order,
        customer: {
          email: email,
        },
      };
    } else {
      params = {
        paymentType,
        termsAccepted: chageAGB,
        privacyPolicyAccepted: chageDaten,
        sharingWithNonMedicalStaffAccepted: lastCheck1,
        bestConscienceConfirmed: lastCheck2,
        order,
        customer,
        shipping,
        invoice,
      };
    }

    const apiParams = JSON.stringify(params);
    localStorage.setItem("reduxData", apiParams);

    const formData = new FormData();
    if (!leadId) {
      formData.append("idCardFile", idCardFile);
    }
    formData.append("orderData", apiParams);

    try {
      const response = await fetch("https://api.extensive.live/order", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (data.redirectUrl) {
        router.push(data.redirectUrl);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const sendPredic = async () => {

    const errors = {
      gVorName : !gVorName,
      gNarName : !gNarName,
      gOrt : !gOrt,
      gPostNumber : !gPostNumber,
      gStreet : !gStreet,
      bDeliverCountry: !bDeliverCountry,
      gCouponCode:!gCouponCode,
      gAgreeGTC:!gAgreeGTC,
    }
    console.log(errors, "errors");
    dispatch(setLastValidationErrors(errors));
    
    let hasErrors;
    if(
      !gVorName ||
      !gNarName ||
      !gOrt ||
      !gPostNumber ||
      !gStreet ||
      !bDeliverCountry ||
      !gCouponCode ||
      !gAgreeGTC
    ){
      hasErrors = true;
      setHasErrors(true);
      
    } else {
      hasErrors = false;
      setHasErrors(false);
      console.log("haserrors false");
    }
    let isCheck =
      chageAGB &&
      chageDaten &&
      lastCheck1 &&
      lastCheck2 
      // isGVorName
      // isgStreet
      // isgPostNumber &&
      // isOrt;

    if (leadId) {
      isCheck = true;
    }
    setLastValidErrors(isCheck);
    if (isCheck && !hasErrors) {
      createCheckout(paymentType);
    } else {
      toast.error("Bitte akzeptieren Sie alle erforderlichen Felder", {
        duration: 1500,
      });
    }
  };

  useEffect(() => {
    selectedHerbList.map((product, index) => {
      const newProduct = {
        productId: product.id,
        quantity: product.herbAmount,
      };
      setProductList((prevItems) => [...prevItems, newProduct]);
    });
  }, [selectedHerbList]);

  useEffect(() => {
    setOrder({
      prescriptionId: prescriptionId?.id,
      pharmacyName: selectedPharmacy?.name,
      products: productList,
    });
  }, [prescriptionId, productList, selectedPharmacy]);

  useEffect(() => {
    setCustomer({
      email: email,
      salutation: "Hello",
      firstName: fname,
      lastName: lname,
      birthdate: birthday,
      phone: tphone,
      symptoms: symptoms,
      symptomsDescription: detailedSymptom,
      usingRegularMedication: regMedicine ? true : false,
      regularMedication: regMedicine,
      allergiesPresent: allergiInfo ? true : false,
      allergies: allergiInfo,
      chronicDiseasesPresent: chronic ? true : false,
      chronicDiseases: chronic,
      insurance: gInsurance,
      vehicleMachineWarningConfirmed: gCannvanisDrive,
      informingMedicalPersonnelConfirmed: gCTKnow,
      exclusionCriteria: gCheckedContents,
      customExperiences: gAnythingelse,
    });
  }, []);

  useEffect(() => {
    setShipping({
      street: gStreet,
      zipCode: gPostNumber,
      city: gOrt,
      country: deliverCountry,
      firstName: gVorName,
      lastName: gNarName,
    });
  }, [gStreet, gPostNumber, gOrt, deliverCountry, gVorName, gNarName]);

  useEffect(() => {
    setInvoice({
      identicalWithShipping: identicalWithShipping,
      street: gBStreet,
      zipCode: gBillPost,
      city: gBillOrt,
      country: bDeliverCountry,
    });
  }, [identicalWithShipping, gBStreet, gBillPost, gBillOrt, bDeliverCountry]);

  return (
    <div className="w-full bg-[rgba(243,243,243)]  flex -webkit-flex flex-col items-center h-auto min-h-[100vh]">
      <div className=" lg:max-w-[870px] lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm w-full px-[15px] mb-12">
        <h2 className="text-4xl mb-10 mr-auto text-[#161616] font-extrabold ml-4">
          Preise & Bezahlmethoden
        </h2>
        <div className="pb-[60px] border-b border-b-[#00000012]">
          <PricePrescription />
        </div>

        <div className="max-w-[820px] mx-auto sm:p-[50px] p-6 bg-white md:rounded-[50px] rounded-[24px] mt-[60px]">
          <h1 className="text-[20px] font-extrabold text-custom-black mb-[20px]">
            Zusammenfassung
          </h1>
          <ConfirmProducts />
          <div className="flex -webkit-flex gap-1 bg-[#FFD6001A] justify-center items-center border-b-[#00000012]">
            <Image src={warningIcon} alt="warning" width={14} height={14} />
            <p className="text-[#886419] py-[10px] rounded-[20px]">
              Die hier angezeigten Kosten werden Dir separat von deiner
              Wahl-Apotheke in Rechnung gestellt.
            </p>
          </div>
          <div className="mt-[30px] py-[30px] border-t-[#00000012] border-t">
            {/* <DoctorFinal
              onClick={handleDoctor2}
              docImg="/img/doctor2"
              countryImg="/icon/Group3.png"
              countryname="Deutschland"
              major="Phychologie"
              time={6}
              isVideo={false}
            /> */}
          </div>
          <div className="flex -webkit-flex md:flex-row flex-col justify-center items-center gap-4">
            <InputDefault
              content="Gutscheincode"
              inputContent={couponCode}
              setInputContent={setCouponCode}
              className="w-full"
              classinput={`${
                lastValidationErrors?.gAgreeGTC && !gCouponCode
                  ? "border border-alert-red"
                  : "border-none"
              }`}
            />
            <Button
              content="zur Übersicht"
              onClick={() => applyZur()}
              className="md:w-[146px] w-full bg-[#FFFFFF] hover:border-[3px] border-[3px] border-[#41057E] hover:border-[rgba(65,5,126,1)] hover:bg-[#41057E] hover:text-[white]
           rounded-[60px] px-4 py-[10px] text-[18px] font-bold text-[#41057E]"
            />
          </div>
          <div className="flex -webkit-flex justify-between items-center font-extrabold text-xl text-custom-black  pt-[30px]">
            <span>Gesamtbetrag</span>
            <span>
              {prescriptionId?.id === 1
                ? prescriptionId?.discountedPrice.toFixed(2)
                : prescriptionId?.regularPrice.toFixed(2)}{" "}
              &nbsp; €
            </span>
          </div>
        </div>
        <div
          className={`max-w-[820px] mx-auto mt-[30px] ${
            leadId ? "hidden" : ""
          }`}
        >
          <Delivery />
        </div>
      </div>
      <div className="lg:max-w-[870px] lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm w-full px-[15px] flex -webkit-flex justify-center">
        <PaymentMethod
          chageAGB={chageAGB}
          setChageAGB={setChageAGB}
          chageDaten={chageDaten}
          setChageDaten={setChageDaten}
          lastCheck1={lastCheck1}
          setLastCheck1={setLastCheck1}
          lastCheck2={lastCheck2}
          setLastCheck2={setLastCheck2}
          lastValidErrors={lastValidErrors}
        />
      </div>
      <Button
        content="Jetzt Bezahlen"
        onClick={() => sendPredic()}
        className="w-full max-w-[820px] mt-5 sm:mb-[130px] mb-[80px] bg-custom-purple hover:border-[3px] border-[3px] border-white hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-custom-purple
           rounded-[60px] px-4 py-[10px] text-base font-bold text-white"
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  email: state.counter.email,
  fname: state.counter.fname,
  lname: state.counter.lname,
  tphone: state.counter.tphone,
  symptoms: state.counter.symptoms,
  allergiInfo: state.counter.allergiInfo,
  chronic: state.counter.chronic,
  gInsurance: state.counter.gInsurance,
  gCannvanisDrive: state.counter.gCannvanisDrive,
  gCTKnow: state.counter.gCTKnow,
  gCheckedContents: state.counter.gCheckedContents,
  gAnythingelse: state.counter.gAnythingelse,
  regMedicine: state.counter.regMedicine,
  detailedSymptom: state.counter.detailedSymptom,
  birthday: state.counter.birthday,
  gender: state.counter.gender,
  validationErrors: state.counter.validationErrors,
  gStreet: state.counter.gStreet,
  gPostNumber: state.counter.gPostNumber,
  gOrt: state.counter.gOrt,
  deliverCountry: state.counter.deliverCountry,
  gVorName: state.counter.gVorName,
  gNarName: state.counter.gNarName,
  gCVV: state.counter.gCVV,
  gAblaufdatum: state.counter.gAblaufdatum,
  gKartennummer: state.counter.gKartennummer,
  lastValidationErrors: state.counter.lastValidationErrors,

  gBStreet: state.counter.gBStreet,
  gBillPost: state.counter.gBillPost,
  gBillOrt: state.counter.gBillOrt,
  bDeliverCountry: state.counter.bDeliverCountry,
  identicalWithShipping: state.counter.identicalWithShipping,
  selectedHerbList: state.counter.selectedHerbList,
  selectedPharmacy: state.counter.selectedPharmacy,
  prescriptionId: state.counter.prescriptionId,
  idCardFile: state.counter.idCardFile,
  paymentType: state.counter.paymentType,
  leadId: state.counter.leadId,
});
const mapDispatchToProps = { setValidationErrors };
export default connect(mapStateToProps, mapDispatchToProps)(PricePayMethod);
