import { createSlice, PayloadAction } from "@reduxjs/toolkit";
      
interface IHerbData {
  herbImg: string;
  herbName: string;
  herbTHC: number;
  herbCBD: number;      
  herbKultivar: string;
  herbGenetik: string;    
  herbPriceFrom: number;
  herbPriceTo: number;
  herbTalent: number;    
  herbAmount: number;     
}

const { reducer, actions } = createSlice({
  name: "counter",
  initialState: {
    value: 0,      
    pageStatus: 1,   
    name: null,
    email: null,
    registerEmail: null,
    mister: null,
    gender: null,
    fname: null,
    lname: null,     
    birthday: null,
    tphone: null,
    gAnythingelse: null,
    // first page last five options
    gInsurance: null,
    gHaveAllergy:null,
    gDoctorLamaCheck:null,
    gHaveIllness:null,
    gAlwaysGetMedicine:null,

    gCannvanisDrive: null,
    gCTKnow: null,
    gCheckedContents: [],
    validationErrors: {},
    lastValidationErrors: {},
    symptoms: [],
    detailedSymptom: null,
    regMedicine: null,    
    allergiInfo: null,
    chronic: null,
    isTherapy: 0,
    prescriptionId: null,
    selectedHerbList: [],
    selectedPharmacy: null,
    selectedSearchKeyWords: null,
    deliverCountry: null,
    bDeliverCountry: null,
    gCouponCode: null,
    gStreet: null,
    gPostNumber: null,
    gOrt: null,
    gVorName: null,
    gNarName: null,
    gKartennummer: null,
    gAblaufdatum: null,
    gCVV: null,
    gCardVorName: null,
    gCardNachName: null,
    gBStreet: null,
    gBillPost: null,
    gBillOrt: null,
    gAgreeGTC: null,
    identicalWithShipping: null,
    // last alert
    alertAGB: false,
    alertDaten: false,
    alertLCheck1: false,
    alertLCheck2: false,
    idCardFile: null,
    paymentType: null,
    leadId: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setPageStatus: (state, { payload }) => {
      state.pageStatus = payload;
    },
    setgAgreeGTC: (state, { payload }) => {
      state.gAgreeGTC = payload;
    },     
    setalertAGB: (state, { payload }) => {
      state.alertAGB = payload;
    },
    setalertDaten: (state, { payload }) => {
      state.alertDaten = payload;
    },
    setalertLCheck1: (state, { payload }) => {
      state.alertLCheck1 = payload;
    },
    setalertLCheck2: (state, { payload }) => {
      state.alertLCheck2 = payload;
    },
    setGStreet: (state, { payload }) => {
      state.gStreet = payload;
    },
    setGPostNumber: (state, { payload }) => {
      state.gPostNumber = payload;
    },
    setgOrt: (state, { payload }) => {
      state.gOrt = payload;
    },
    setgVorName: (state, { payload }) => {
      state.gVorName = payload;
    },
    setgNarName: (state, { payload }) => {
      state.gNarName = payload;
    },
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    setRegisterEmail: (state, { payload }) => {
      state.registerEmail = payload;
    },
    setGender: (state, { payload }) => {
      state.gender = payload;
    },
    setMister: (state, { payload }) => {
      state.mister = payload;
    },
    setFname: (state, { payload }) => {
      state.fname = payload;
    },
    setLname: (state, { payload }) => {
      state.lname = payload;
    },
    setBirthday: (state, { payload }) => {
      state.birthday = payload;
    },
    setTphone: (state, { payload }) => {
      state.tphone = payload;
    },
    setgHaveAllergy: (state, { payload }) => {
      state.gHaveAllergy = payload;
    },
    setgDoctorLamaCheck: (state, { payload }) => {
      state.gDoctorLamaCheck = payload;
    },
    setgHaveIllness: (state, { payload }) => {
      state.gHaveIllness = payload;
    },
    setgAlwaysGetMedicine: (state, { payload }) => {
      state.gAlwaysGetMedicine = payload;
    },
    
    setValidationErrors: (state, { payload }) => {
      state.validationErrors = payload;
    },
    setLastValidationErrors: (state, { payload }) => {
      state.lastValidationErrors = payload;
    },
    setSymptoms: (state, { payload }) => {
      state.symptoms = payload;
    },
    setDetailedSymptom: (state, { payload }) => {
      state.detailedSymptom = payload;
    },
    setRegMedicine: (state, { payload }) => {
      state.regMedicine = payload;
    },
    setAllergiInfo: (state, { payload }) => {
      state.allergiInfo = payload;
    },
    setChronic: (state, { payload }) => {
      state.chronic = payload;
    },
    setSelectedHerbList: (state, { payload }) => {
      state.selectedHerbList = payload;
    },
    setSelectedPharmacy: (state, { payload }) => {
      state.selectedPharmacy = payload;
    },
    setSelectedSearchKeyWords: (state, { payload }) => {
      state.selectedSearchKeyWords = payload;
    },
    // Therapy Three kinds of check First page
    setIsTherapy: (state, { payload }) => {
      state.isTherapy = payload;
    },
    setGInsurance: (state, { payload }) => {
      state.gInsurance = payload;
    },
    setGCTKnow: (state, { payload }) => {
      state.gCTKnow = payload;
    },

    setDeliverCountry: (state, { payload }) => {
      state.deliverCountry = payload;
    },
    setBDeliverCountry: (state, { payload }) => {
      state.bDeliverCountry = payload;
    },
    setGCouponCode: (state, { payload }) => {
      state.gCouponCode = payload;
    },
    setGAnythingelse: (state, { payload }) => {
      state.gAnythingelse = payload;
    },
    setGCannvanisDrive: (state, { payload }) => {
      state.gCannvanisDrive = payload;
    },
    setGCheckedContents: (state, { payload }) => {
      state.gCheckedContents = payload;
    },
    setGBStrabe: (state, { payload }) => {
      state.gBStreet = payload;
    },
    setgBillPost: (state, { payload }) => {
      state.gBillPost = payload;
    },
    setgBillOrt: (state, { payload }) => {
      state.gBillOrt = payload;
    },
    setIdenticalWithShipping: (state, { payload }) => {
      state.identicalWithShipping = payload;
    },
    setPrescriptionId: (state, { payload }) => {
      state.prescriptionId = payload;
    },
    setIdCardFile: (state, { payload }) => {
      state.idCardFile = payload;
    },
    setPaymentType: (state, { payload }) => {
      state.paymentType = payload;
    },
    setLeadId: (state, { payload }) => {
      state.leadId = payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const {
  increment,
  setGPostNumber,
  setGStreet,
  setgNarName,
  setgOrt,
  setgVorName,
  setGCouponCode,
  setSelectedSearchKeyWords,
  setBDeliverCountry,
  setGCannvanisDrive,
  setGCTKnow,
  setRegisterEmail,
  setGCheckedContents,
  setDeliverCountry,
  setSelectedHerbList,
  setIsTherapy,
  setChronic,
  setAllergiInfo,
  setRegMedicine,
  setDetailedSymptom,
  setSymptoms,
  decrement,
  setPageStatus,
  setEmail,
  setGender,
  setMister,
  setFname,
  setLname,
  setBirthday,
  setTphone,
  setValidationErrors,
  setSelectedPharmacy,
  setGAnythingelse,
  setalertAGB,
  setalertDaten,
  setGBStrabe,
  setPrescriptionId,
  setIdenticalWithShipping,
  setgBillPost,
  setgBillOrt,
  setalertLCheck1,
  setalertLCheck2,
  setGInsurance,
  setIdCardFile,
  setPaymentType,
  setLeadId,
  setgHaveAllergy,
  setgDoctorLamaCheck,
  setgHaveIllness,
  setgAlwaysGetMedicine,
  setLastValidationErrors,
  setgAgreeGTC
} = actions;

export default reducer;
