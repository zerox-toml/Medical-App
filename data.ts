import { HiDocumentText } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import { TbClockHour11Filled } from "react-icons/tb";

const MedicalHistoryFormData = [
    {
        Icon: HiDocumentText,
        medical_content: "Wir bieten Ihnen hiermit die Möglichkeit Cannabis auf Rezept zu erhalten."
    },
    {
        Icon: FaUserDoctor,
        medical_content: "Unsere Ärzte warten auf Ihre Anmeldung um mit der Online-Behandlung zu beginnen."
    },
    {
        Icon: TbClockHour11Filled,
        medical_content: "Das Rezept wird binnen 12-24h ausgestellt, insofern nach strenger Einzelfallprüfung ein persönlicher Arzt-Kontakt nicht notwendig ist."
    },
]

const MHistoryMultiData = [
    {
        title: "ADHS/Aufmerksamkeitsprobleme"
    },
    {
        title: "Antriebslosigkeit"
    },
    {
        title: "Appepitlosigkeit"
    },
    {
        title: "Belastendes Lebensereignis"
    },
    {
        title: "Tremor"
    },
    {
        title: "Unwohlsein"
    },
    {
        title: "Durchfall"
    },
    {
        title: "Epilepsie"
    },
    {
        title: "Fieber"
    },
    {
        title: "Ermündung"
    },
    {
        title: "Übelkeit"
    },
    {
        title: "Schlafstörung"
    },
    {
        title: "Sonstiges"
    },
]

const PInfoCheckBoxData = [
    {
        index:0,
        content: "Nein, es liegen keine Ausschlusskriterien vor"
    },
    {
        index:1,
        content: "Bestehende oder mögliche Schwangerschaft"
    },
    {
        index:2,
        content: "Intensive Schmerzen (z.B. neuropatische Schmerzen)"
    },
    {
        index:3,
        content: "Suchterkrankung (ehemalige Abhängigkeit von Cannabis oder anderen Drogen)"
    },
    {
        index:4,
        content: "Chronische Herzerkrankung (Erhöhtes Risiko für Herz-Kreislauf-Erkrankungen)"
    },
    {
        index:5,
        content: "Angeborene oder erworbene Immunschwäche"
    },
    {
        index:6,
        content: "Atemnot (z.B. als Symptom einer anderen Erkrankung)"
    },
    {
        index:7,
        content: "In Vergangenheit Medikamente überdosiert (ohne Absprache mit Ihrem Arzt)"
    },
    {
        index:8,
        content: "Unangenehme bzw. starke Nebenwirkungen nach Cannabis Konsum erfahren"
    },
]
const CPreEffectCheckData = [
    {
        content:"aktivierend",
    },
    {
        content:"analgetisch",
    },
    {
        content:"angstlösend",
    },
    {
        content:"anregend",
    },
    {
        content:"antibiotisch",
    },
    {
        content:"angstlösend",
    },
    {
        content:"antibiotisch",
    },
    {
        content:"angstlösend",
    },
    {
        content:"antibiotisch",
    },
    {
        content:"aktivierend",
    },
]

const CPreTerpeneData = [
    {
        terpene:"Trans-Caryophyllen"
    },
    {
        terpene:"Humulen"
    },
    {
        terpene:"Farnesen"
    },
    {
        terpene:"D-Limonen"
    },
    {
        terpene:"Beta-Myrcen"
    },
    {
        terpene:"Limonen"
    },
    {
        terpene:"Linalool"
    },
    {
        terpene:"Alpha-Caryophyllene"
    },
    {
        terpene:"Geranylacetat"
    },
    {
        terpene:"Alpha-Pinen"
    },
    {
        terpene:"Alpha-Humulen"
    },
    {
        terpene:"Beta-Pinen"
    },
    {
        terpene:"Nerolidol"
    },
    {
        terpene:"Beta-Caryophyllen"
    },
    {
        terpene:"Bisabolol"
    },

]

const CPreSymptom = [

]

const PrepareHerbData = [
    {
        herbCBD: 1,
        herbGenetik: 'Indica',
        herbImg: '/Img/herb (1).png',
        herbKultivar: 'Wedding Singer',
        herbName: '420 Evolution 30/1 CA WES',
        herbPriceFrom: 10,
        herbPriceTo: 29,
        herbTHC: 26,
        herbTalent: 5,
        herbAmount: 0,
    },
    {
        herbCBD: 1,
        herbGenetik: 'Indica',
        herbImg: '/Img/herb (1).png',
        herbKultivar: 'Mac Doughnut',
        herbName: '420 Evolution 30/1 CA WES',
        herbPriceFrom: 10,
        herbPriceTo: 29,
        herbTHC: 26,
        herbTalent: 5,
        herbAmount: 0,
    },
    {
        herbCBD: 1,
        herbGenetik: 'Hybrid',
        herbImg: '/Img/herb (2).png',
        herbKultivar: 'Pink Kush',
        herbName: '420 Evolution 30/1 CA WES',
        herbPriceFrom: 10,
        herbPriceTo: 29,
        herbTHC: 26,
        herbTalent: 5,
        herbAmount: 0,
    },
    {
        herbCBD: 1,
        herbGenetik: 'Indica',
        herbImg: '/Img/herb (3).png',
        herbKultivar: 'Fine Cookies',
        herbName: '420 Evolution 30/1 CA WES',
        herbPriceFrom: 10,
        herbPriceTo: 29,
        herbTHC: 26,
        herbTalent: 5,
        herbAmount: 0,
    },
    {
        herbCBD: 1,
        herbGenetik: 'Hybrid',
        herbImg: '/Img/herb (4).png',
        herbKultivar: 'Mac Doughnut',
        herbName: '420 Evolution 30/1 CA WES',
        herbPriceFrom: 10,
        herbPriceTo: 29,
        herbTHC: 26,
        herbTalent: 5,
        herbAmount: 0,
    },
    {
        herbCBD: 1,
        herbGenetik: 'Sativa',
        herbImg: '/Img/herb (5).png',
        herbKultivar: 'Liberty Haze',
        herbName: '420 Evolution 30/1 CA WES',
        herbPriceFrom: 33,
        herbPriceTo: 59,
        herbTHC: 26,
        herbTalent: 5,
        herbAmount: 0,
    },
    {
        herbCBD: 1,
        herbGenetik: 'Hybrid',
        herbImg: '/Img/herb (6).png',
        herbKultivar: 'Wedding Singer',
        herbName: '420 Evolution 30/1 CA WES',
        herbPriceFrom: 10,
        herbPriceTo: 46,
        herbTHC: 13,
        herbTalent: 5,
        herbAmount: 0,
    },
    {
        herbCBD: 1,
        herbGenetik: 'Indica',
        herbImg: '/Img/herb (7).png',
        herbKultivar: 'Wedding Singer',
        herbName: '420 Evolution 30/1 CA WES',
        herbPriceFrom: 10,
        herbPriceTo: 29,
        herbTHC: 13,
        herbTalent: 5,
        herbAmount: 0,
    },
    {
        herbCBD: 1,
        herbGenetik: 'Hybrid',
        herbImg: '/Img/herb (8).png',
        herbKultivar: 'Jet Fuel Gelato',
        herbName: '420 Evolution 30/1 CA WES',
        herbPriceFrom: 10,
        herbPriceTo: 29,
        herbTHC: 13,
        herbTalent: 5,
        herbAmount: 0,
    },
    {
        herbCBD: 1,
        herbGenetik: 'Indica',
        herbImg: '/Img/herb (9).png',
        herbKultivar: 'Wedding Singer',
        herbName: '420 Evolution 30/1 CA WES',
        herbPriceFrom: 10,
        herbPriceTo: 29,
        herbTHC: 26,
        herbTalent: 5,
        herbAmount: 0,
    },
    
    
]

const CardPaymentData = [
    {

        cardIndex:1,
        cardName:"PayPal",
        imgUrl:"/Icon/paypal.png",
        cardWidth:82,
        cardHeight:48,
    },
    {
        cardIndex:2,
        cardName:"Visa/MasterCard",
        imgUrl:"/Icon/card.png",
        cardWidth:50,
        cardHeight:50,
    },
    {
        cardIndex:3,
        cardName:"Apple Pay",
        imgUrl:"/Icon/apple.png",
        cardWidth:82,
        cardHeight:48,
    },
    {
        cardIndex:4,
        cardName:"Überweisung",
        imgUrl:"/Icon/transfer.png",
        cardWidth:50,
        cardHeight:50,
    },
    {
        cardIndex:5,
        cardName:"Kauf auf Rechnung",
        imgUrl:"/Icon/invoice.png",
        cardWidth:50,
        cardHeight:50,
    },
]

export {
    MedicalHistoryFormData,
    MHistoryMultiData,
    PInfoCheckBoxData,
    PrepareHerbData,
    CPreEffectCheckData,
    CPreTerpeneData,
    CardPaymentData,
}