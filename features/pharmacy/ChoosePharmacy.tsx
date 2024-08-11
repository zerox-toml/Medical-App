import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/atoms/Button";
import Pharmacy from "../../components/molecules/Pharmacy/Pharmacy";
import Search from "../../components/molecules/Pharmacy/Search";
import { useSelector } from "react-redux";
import { setSelectedPharmacy } from "../../redux/counterSlice";

interface Props {
    isStep: number;
    setIsStep: (value: number) => void;
}
interface SearchNameKeyword {
    name: string,
    kolin: string
}

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

interface PharmacyPaginationDTO {
    page?: string;
    limit?: string;
    search?: string;
    selectedProducts?: string[];
    productAmounts?: number[];
}

const ChoosePharmacy = ({ isStep, setIsStep }: Props) => {
    const dispatch = useDispatch();
    const initialValue = {
        page: '1',
        limit: '3',
        // search: '',
    }

    const [pharmacyFilter, setPharmacyFilter] = useState<PharmacyPaginationDTO>(initialValue);
    const [filteredPharmacy, setFilteredPharmacy] = useState([{}]);
    const [searchedPharmacy, setSearchedPharmacy] = useState([{}]);
    const [isMore, setIsMore] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [pharmacyLimit, setPharmacyLimit] = useState(3);
    const [pharmacySearch, setPharmacySearch] = useState('');
    const [isMoreAvailable, setIsMoreAvailable] = useState(true);

    const selectedHerbList: Product[] = useSelector(
        (state: any) => state.counter.selectedHerbList
    );
    const selectedPharmacy = useSelector(
        (state: any) => state.counter.selectedPharmacy
    );
    const getFilterData = async (PharmacyFilter: PharmacyPaginationDTO) => {
        const params: { [key: string]: string | number[] | number | boolean | null | string[] } = {
            page: PharmacyFilter.page ?? null,
            limit: pharmacyLimit ?? null,
            // search: pharmacySearch ?? null,
            // selectedProducts: PharmacyFilter.selectedProducts ?? null,
            // productAmounts: PharmacyFilter.productAmounts ?? null,
        };

        const filteredParams = Object.fromEntries(
            Object.entries(params).filter(([_, v]) => v !== null)
        );

        let queryString = Object.entries(filteredParams)
            .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
            .join('&');

        if (selectedHerbList && selectedHerbList.length > 0) {
            selectedHerbList.forEach(herb => {
                queryString += `&selectedProducts[]=${encodeURIComponent(herb.id)}`;
            });
        }

        if (selectedHerbList && selectedHerbList.length > 0) {
            selectedHerbList.forEach(herb => {
                queryString += `&productAmounts[]=${encodeURIComponent(herb.herbAmount)}`;
            });
        }

        const response = await fetch(`/api/pharmacy?${queryString}`);
        return await response.json();
    };

    const getSearchedData = async () => {
        const params: { [key: string]: string | number[] | number | boolean | null | string[] } = {
            limit: 5,
            search: pharmacySearch ?? null,
        };
        const filteredParams = Object.fromEntries(
            Object.entries(params).filter(([_, v]) => v !== null)
        );

        let queryString = Object.entries(filteredParams)
            .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
            .join('&');

        const response = await fetch(`/api/pharmacy?${queryString}`);
        return await response.json();
    };

    useEffect(() => {
        getFilterData(pharmacyFilter).then(pharmacy => {
            setFilteredPharmacy(pharmacy.data)
            setIsMoreAvailable(pharmacy.moreAvailable)
        }).catch(error => {
            console.error('Error fetching pharmacy:', error);
        });
    }, [selectedHerbList, pharmacyLimit]);

    useEffect(() => {
        if (pharmacySearch) {
            getSearchedData().then(pharmacy => {
                setSearchedPharmacy(pharmacy.data)
            }).catch(error => {
                console.error('Error fetching pharmacy:', error);
            });
        }
    }, [pharmacySearch]);

    const handlePharmacyClick = (pharmacy: object) => {
        setClicked(false);
        dispatch(setSelectedPharmacy(pharmacy))
    }

    const handlemore = () => {
        setIsMore(!isMore);
    }
    const handleClick = (o: any) => {
        dispatch(setSelectedPharmacy(o))
        setClicked(true);
        setDropdownVisible(false);
    };

    const showMore = () => {
        setPharmacyLimit(pharmacyLimit + 3);
    }

    const handleSearchChange = (content: string) => {
        setPharmacySearch(content)
    }

    const handleSetStep = () => {
        setIsStep(4);
        window.scrollTo(0, 0);
    };

    return (
        <div className="w-full bg-[rgba(243,243,243)] flex -webkit-flex flex-col justify-start items-center h-auto min-h-[100vh] overflow-x-hidden">
            <div className=" lg:max-w-[820px] lg:px-[0px] md:max-w-screen-md md:px-[16px] sm:px-[16px] sm:max-w-screen-sm w-full px-[15px] mb-12">
                <h2 className="md:text-[36px] text-[24px] text-[#161616] font-extrabold leading-[3.2rem]">
                    Auswahl der Apotheke
                </h2>
                <div className=" text-[16px] md:text-[16px] mt-[40px] mb-[40px]">Wir empfehlen eine der folgenden Apotheken auszuwählen, um eine schnelle Abwicklung zu gewährleisten.</div>
                {filteredPharmacy?.map((pharmacy: any, index: number) => (
                    <Pharmacy key={index} isClicked={pharmacy === selectedPharmacy} onClick={() => handlePharmacyClick(pharmacy)} tags={pharmacy.tags} pharmacyImg="/Icon/pharmacyFallback" name={pharmacy.name} zip={pharmacy?.zip} city = {pharmacy?.city} price={pharmacy.totalPrice} />
                ))}
                {/* <Pharmacy isClicked={isClicked1} onClick={handleDoctor1} extraServ="Vorreservierung per Privatrezept.net möglich" pharmacyImg="/Img/pharmacy1" name="Pelican Apotheke" isServ={true} location="Rosenheim, Deutschland (20,4 km)" price="182,50"  />
                <Pharmacy isClicked={isClicked2} onClick={handleDoctor2} extraServ="Schnelle Bearbeitung" pharmacyImg="/Img/pharmacy2" name="Dom Apotheke Köln" isServ={true} location="Köln, Deutschland (1,4 km)" price="193,50" />
                <Pharmacy isClicked={isClicked3} onClick={handleDoctor3} pharmacyImg="/Img/pharmacy3" name="Birken-Apotheke" isServ={false} location="Köln, Deutschland (1,4 km)" price="203,50" /> */}
                {isMoreAvailable &&
                    <div onClick={showMore} className={`text-[16px] cursor-pointer text-[#41057E] underline mt-5 w-full text-center mb-[30px] sm:mb-[30px]`}>mehr anzeigen</div>
                }
                <Button
                    disabled={selectedPharmacy === null}
                    content="Auswahl bestätigen"
                    onClick={() => handleSetStep()}
                    className=" w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)]
           rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white"
                />
                <div onClick={handlemore} className={`text-[16px] cursor-pointer text-[#41057E] underline mt-5 w-full text-center mb-[80px] sm:mb-[130px] ${isMore ? "hidden" : "block"}`}>Finde deine Apotheke</div>
                {isMore &&
                    <div className={` mt-10 w-full h-fit overflow-x-hidden ${!clicked ? "mb-[180px]" : "mb-[0px]"}`}>
                        <hr />
                        <div className=" mt-10 w-full h-fit">
                            <Search searchedPharmacy={searchedPharmacy} onChange={handleSearchChange} onClick={handleClick} setDropdownVisible={setDropdownVisible} clicked={clicked} dropdownVisible={dropdownVisible} />
                        </div>
                    </div>
                }
                {clicked ?
                    <div className=" mb-[180px]">
                        <Pharmacy isClicked={true} isSearch={true} pharmacyImg="/Icon/pharmacyFallback" tags={selectedPharmacy.tags} name={selectedPharmacy.name} city={selectedPharmacy.city} zip={selectedPharmacy.zip} price={selectedPharmacy.totalPrice} />
                    </div> :
                    <></>
                }
            </div>
        </div>
    );
};

export default ChoosePharmacy;
