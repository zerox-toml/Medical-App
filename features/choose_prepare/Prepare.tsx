"use client";

import React, { useEffect, useState } from "react";
import CPreHerb from "../../components/atoms/choose_prepare/CPreHerb";
import Button from "../../components/atoms/Button";
import CPreDoctorQuestion from "../../components/molecules/choose_prepare/CPreDoctorQuestion";
import CPreSearch from "../../components/atoms/choose_prepare/CpreSearch";
import CprePriceRange from "../../components/atoms/choose_prepare/CprePriceRange";
import CpreGenetik from "../../components/atoms/choose_prepare/CPreGenetik";
import CpreDominaz from "../../components/molecules/choose_prepare/CPreDominaz";
import CPreTHCGehalt from "../../components/atoms/choose_prepare/CpreTHCGehalt";
import CPreCBDGehalt from "../../components/atoms/choose_prepare/CPreCBDGehalt";
import CPreIrrad from "../../components/atoms/choose_prepare/CPreIrrad";
import CPreEffectCheckList from "../../components/molecules/choose_prepare/CPreEffectCheckList";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import CPreAmountRange from "../../components/atoms/choose_prepare/CPreAmountRange";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedHerbList } from "../../redux/counterSlice";
import CPreTerpene from "../../components/molecules/choose_prepare/CPreTerpene";
import CPreSymptom from "../../components/molecules/choose_prepare/CPreSymptom";
import { FilterProps } from "../../type/FilterProps";
import { IoCloseSharp } from "react-icons/io5";
import CPreFilter from "../../components/atoms/choose_prepare/CPreFilter";

interface Props {
  isStep: number;
  setIsStep: (value: number) => void;
  showFilter: boolean;
  setShowFilter: (value: boolean) => void;
}

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
  // herbAmount?: number;
}

const Prepare = ({ isStep, setIsStep, showFilter, setShowFilter }: Props) => {
  const dispatch = useDispatch();
  const [isDoctor, setIsDoctor] = useState(false);
  const [isDominaz, setIsDominaz] = useState(true);
  const [isShowEffect, setIsShowEffect] = useState(true);
  const [isShowTerpene, setIsShowTerpene] = useState(false);
  const [isShowSymptome, setIsShowSymptome] = useState(false);
  const [selectedHerb, setSelectedHerb] = useState<Product | null>();
  const [herbAmount, setHerbAmount] = useState<number>(0); // Initialize state with default value
  const [showOverView, setShowOverView] = useState(false);
  const [number, setNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>();
  const [effectFilters, setEffectFilters] = useState<[]>();
  const [terpenesFilters, setTerpenesFilters] = useState<[]>();
  const [medicalUsageFilters, setMedicalUsageFilters] = useState<[]>();
  const [tasteFilters, setTasteFilters] = useState<[]>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [searchContent, setSearchContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filterLimit, setFilterLimit] = useState(10);
  const [filterPage, setFilterPage] = useState(1);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 768);
  };

  useEffect(() => {
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // filter
  const initialValue = {
    search: "",
    valueMinTHC: 0,
    valueMaxTHC: 100,
    valueMinCBD: 0,
    valueMaxCBD: 100,
    genetik: "Hybrid",
    checkedEffect: [],
    checkedTerpene: [],
    checkedSymptoms: [],
    domina: "",
    minPrice: 0,
    maxPrice: 100,
    irradiated: true,
  };
  const [filterObject, setFilterObject] = useState<FilterProps>(initialValue);
  const [reseted, setReseted] = useState(false);
  const selectedHerbList: Product[] = useSelector(
    (state: any) => state.counter.selectedHerbList
  );

  const resetFilter = () => {
    setFilterObject(initialValue);
    setSearchContent("");
    setReseted(true);
  };
  const changeFilter = () => {

    setShowFilter(!showFilter);
  };
  useEffect(() => {
    getFilterData({});
    GetData();
  }, []);

  const GetData = async () => {
    const filters = await fetch("/api/filter");
    const filterData = await filters.json();

    setEffectFilters(filterData.effect);
    setTerpenesFilters(filterData.terpenes);
    setMedicalUsageFilters(filterData.medicalUsage);
    setTasteFilters(filterData.taste);
  };

  useEffect(() => {
    setNumber(herbAmount);
  }, [herbAmount]);

  const handleShowEffectList = () => {
    if (isShowEffect === false) setIsShowEffect(true);
    else setIsShowEffect(false);
  };

  const handleShowTerpeneList = () => {
    if (isShowTerpene === false) setIsShowTerpene(true);
    else setIsShowTerpene(false);
  };

  const handleShowSymptomeList = () => {
    if (isShowSymptome === false) setIsShowSymptome(true);
    else setIsShowSymptome(false);
  };

  const handleHerbClick = (herb: Product) => {
    setSelectedHerb(herb);
  };

  const handleCloseModal = () => {
    setSelectedHerb(null);
  };

  const gotoOverview = () => {
    const data = selectedHerbList
      ? [...selectedHerbList, { ...selectedHerb, herbAmount: herbAmount }]
      : [{ ...selectedHerb, herbAmount: herbAmount }];
    dispatch(setSelectedHerbList(data));
    setHerbAmount(0);
    setSelectedHerb(null);
    setShowOverView(!showOverView);
    window.scrollTo(0, 0);

  };

  const seeOverview = () => {
    setShowOverView(!showOverView);
    isDoctor && setIsStep(2);
    window.scrollTo(0, 0);

  };
  const removeHerbAmount = (index: number) => {
    const selectedHerbLists = [...selectedHerbList];
    selectedHerbLists.splice(index, 1);
    dispatch(setSelectedHerbList(selectedHerbLists));
  };

  const getFilterData = async (filterObject: FilterProps) => {
    setIsLoading(true);
    const params: {
      [key: string]: string | number | boolean | null | string[];
    } = {
      page: filterPage,
      limit: filterLimit,
      search: filterObject.search ?? null,
      minPrice: filterObject.minPrice ?? null,
      maxPrice: filterObject.maxPrice ?? null,
      genetic: filterObject.genetik ?? null,
      minThc: filterObject.valueMinTHC ?? null,
      maxThc: filterObject.valueMaxTHC ?? null,
      minCbd: filterObject.valueMinCBD ?? null,
      maxCbd: filterObject.valueMaxCBD ?? null,
      irradiated: filterObject.irradiated ?? false,
    };

    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([_, v]) => v !== null)
    );

    let queryString = Object.entries(filteredParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
      .join("&");

    if (filterObject.checkedEffect && filterObject.checkedEffect.length > 0) {
      filterObject.checkedEffect.forEach((effect) => {
        queryString += `&effect[]=${encodeURIComponent(effect)}`;
      });
    }
    if (filterObject.checkedTerpene && filterObject.checkedTerpene.length > 0) {
      filterObject.checkedTerpene.forEach((terp) => {
        queryString += `&terpenes[]=${encodeURIComponent(terp)}`;
      });
    }

    if (
      filterObject.checkedSymptoms &&
      filterObject.checkedSymptoms.length > 0
    ) {
      filterObject.checkedSymptoms.forEach((symp) => {
        queryString += `&medicalUsage[]=${encodeURIComponent(symp)}`;
      });
    }

    if (selectedHerbList && selectedHerbList.length > 0) {
      selectedHerbList.forEach((herb) => {
        queryString += `&selectedProducts[]=${encodeURIComponent(herb.id)}`;
      });
    }

    const response = await fetch(`/api/products?${queryString}`);
    setIsLoading(false);
    return await response.json();
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (filterObject !== initialValue) {
        setReseted(false);
      }
      getFilterData(filterObject)
        .then((products) => {
          setFilteredProducts(products.data);
          setProducts(products);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }, 200);
    return () => clearTimeout(timer);
  }, [filterObject, selectedHerbList, filterLimit, filterPage]);

  const showMoreProduct = () => {
    setFilterLimit(filterLimit + 10);
    const element = document.getElementById(`product_${filterLimit + 10}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className={`multi-select ${
          showOverView
            ? "hidden"
            : "w-full bg-[rgba(243,243,243)] flex -webkit-flex flex-col  items-center h-auto min-h-[100vh]"
        }`}
      >
        <div
          className={`sm:max-w-[820px] lg:px-[0px]  md:px-[16px]  sm:max-w-screen-[] w-full ${
            showFilter ? "p-[15px]" : "px-0"
          }  mb-12 flex -webkit-flex flex-col`}
        >
          <div
            className={`${
              isLargeScreen ? "flex" : showFilter ? "flex" : "hidden"
            } flex -webkit-flex md:flex-row flex-col justify-between sm:mb-10 mb-0 md:gap-0 gap-[10px]`}
          >
            <p className="md:text-4xl text-3xl font-extrabold">
              Wählen Sie Ihr Präparat
            </p>
            <Button
              content="zur Übersicht"
              onClick={() => seeOverview()}
              className="md:w-[139px] w-full bg-[#FFFFFF] hover:border-[3px] border-[3px] border-[#41057E] hover:border-[rgba(65,5,126,1)] hover:bg-[#41057E] 
              hover:text-[white] rounded-[60px] px-4 py-[10px] text-base font-bold text-[#41057E]"
            />
          </div>
          <div
            className={`${
              isLargeScreen ? "flex" : showFilter ? "flex" : "hidden"
            }`}
          >
            <CPreDoctorQuestion isDoctor={isDoctor} setIsDoctor={setIsDoctor} />
          </div>
          <div
            className={`multi-select ${
              isDoctor
                ? "hidden"
                : `flex -webkit-flex md:flex-row ${
                    showFilter
                      ? "flex-col-reverse justify-between mt-10"
                      : "max-auto justify-center md:w-[295px] w-full items-center flex-col"
                  }  gap-5`
            }`}
          >
            <div
              className={`bottom-0 w-full z-20 ${
                showFilter ? "fixed left-0 " : "flex -webkit-flex mb-[-3rem]"
              }`}
            >
              <CPreFilter
                showFilter={showFilter}
                setShowFilter={setShowFilter}
              />
            </div>
            <div
              className={`
                md:w-[295px] w-full bg-white h-auto p-[30px] rounded-[30px] relative z-0 mx-auto
                ${
                  isLargeScreen
                    ? "flex"
                    : !showFilter
                    ? "flex -webkit-flex mb-[-20rem] z-10"
                    : "hidden"
                }
                flex-col gap-[30px]
              `}
            >
              <div className="w-full">
                <CPreSearch
                  searchContent={searchContent}
                  setSearchContent={setSearchContent}
                  filterObject={filterObject}
                  setFilterObject={setFilterObject}
                  showFilter={showFilter}
                  className="hidden"
                />
              </div>
              <div className="pb-[30px] border-b border-b-[#F5F5F5]">
                <p className="text-custom-black title2 mb-3">Preis</p>
                <CprePriceRange
                  filterObject={filterObject}
                  setFilterObject={setFilterObject}
                />
              </div>

              <CpreGenetik
                filterObject={filterObject}
                setFilterObject={setFilterObject}
              />

              <div className="pb-[30px] border-b border-b-[#F5F5F5]">
                <p className="text-custom-black title2 mb-3">THC Gehalt</p>
                <CPreTHCGehalt
                  filterObject={filterObject}
                  setFilterObject={setFilterObject}
                />
              </div>
              <div className="pb-[30px] border-b border-b-[#F5F5F5]">
                <p className="text-custom-black title2 mb-3">CBD Gehalt</p>
                <CPreCBDGehalt
                  filterObject={filterObject}
                  setFilterObject={setFilterObject}
                />
              </div>
              <CPreIrrad
                filterObject={filterObject}
                setFilterObject={setFilterObject}
              />

              <div>
                <div className="flex -webkit-flex justify-between items-center">
                  <p className="text-custom-black title2">Effect*</p>
                  <div
                    className="text-base text-[#41057E99]"
                    onClick={() => handleShowEffectList()}
                  >
                    <div
                      className={`multi-select ${
                        isShowEffect ? "flex -webkit-flex cursor-pointer" : "hidden"
                      }`}
                    >
                      <FaChevronUp />
                    </div>
                    <div
                      className={`multi-select ${
                        isShowEffect ? "hidden" : "show cursor-pointer"
                      }`}
                    >
                      <FaChevronDown />
                    </div>
                  </div>
                </div>
                <div
                  className={`multi-select ${
                    isShowEffect ? "flex -webkit-flex flex-col mt-5 gap-4" : "hidden"
                  }`}
                >
                  <CPreEffectCheckList
                    reseted={reseted}
                    filterObject={filterObject}
                    setFilterObject={setFilterObject}
                    list={effectFilters}
                  />
                </div>
              </div>

              {/* terpene */}
              <div className="border-b border-b-[#F5F5F5] pb-[30px]">
                <div className="flex -webkit-flex justify-between items-center">
                  <p className="text-custom-black title2">Terpene</p>
                  <div
                    className="text-base text-[#41057E99]"
                    onClick={() => handleShowTerpeneList()}
                  >
                    <div
                      className={`multi-select ${
                        isShowTerpene ? "flex -webkit-flex cursor-pointer" : "hidden"
                      }`}
                    >
                      <FaChevronUp />
                    </div>
                    <div
                      className={`multi-select ${
                        isShowTerpene ? "hidden" : "show cursor-pointer"
                      }`}
                    >
                      <FaChevronDown />
                    </div>
                  </div>
                </div>
                <div
                  className={`multi-select ${
                    isShowTerpene ? "flex -webkit-flex flex-col mt-5 gap-4" : "hidden"
                  }`}
                >
                  <CPreTerpene
                    reseted={reseted}
                    filterObject={filterObject}
                    setFilterObject={setFilterObject}
                    list={terpenesFilters}
                  />
                </div>
              </div>

              {/* Symptome */}
              <div className="border-b border-b-[#F5F5F5] pb-[30px]">
                <div className="flex -webkit-flex justify-between items-center">
                  <p className="text-custom-black title2">MedicalUsage</p>
                  <div
                    className="text-base text-[#41057E99]"
                    onClick={() => handleShowSymptomeList()}
                  >
                    <div
                      className={`multi-select ${
                        isShowTerpene ? "flex -webkit-flex cursor-pointer" : "hidden"
                      }`}
                    >
                      <FaChevronUp />
                    </div>
                    <div
                      className={`multi-select ${
                        isShowTerpene ? "hidden" : "show cursor-pointer"
                      }`}
                    >
                      <FaChevronDown />
                    </div>
                  </div>
                </div>
                <div
                  className={`multi-select ${
                    isShowSymptome ? "flex -webkit-flex flex-col mt-5 gap-4" : "hidden"
                  }`}
                >
                  <CPreSymptom
                    reseted={reseted}
                    filterObject={filterObject}
                    setFilterObject={setFilterObject}
                    list={medicalUsageFilters}
                  />
                </div>
              </div>

              <div
                className=" flex -webkit-flex justify-center gap-1 items-center cursor-pointer"
                onClick={resetFilter}
              >
                <div className=" cursor-pointer">
                  <IoCloseSharp color="#41057E" />
                </div>
                <span className=" text-4 text-[#161616]">
                  alle Filter zurücksetzen
                </span>
              </div>
            </div>
            <div
              className={`
               w-full
              ${
                isLargeScreen
                  ? "flex -webkit-flex flex-col"
                  : showFilter
                  ? "flex -webkit-flex flex-col"
                  : "hidden"
              }
            `}
            >
              <div className="md:hidden w-full block">
                <CPreSearch
                  searchContent={searchContent}
                  setSearchContent={setSearchContent}
                  filterObject={filterObject}
                  setFilterObject={setFilterObject}
                />
              </div>
              {
                // isLoading ? (
                //   <div className=" w-full flex -webkit-flex justify-center items-center mb-[200px] mt-[200px]">
                //     Loading
                //   </div>
                // ) : (
                filteredProducts &&
                  filteredProducts?.map((p: any, index: any) => (
                    <div
                      className=" w-full"
                      id={`product_${index}`}
                      key={index}
                      onClick={() => handleHerbClick(p)}
                    >
                      <CPreHerb
                        herbCBD={p.cbd}
                        herbGenetik={p.genetic}
                        // herbImg={p.imgUrl}
                        herbImg="/Img/herb (9).png"
                        herbKultivar={p.productClass}
                        herbName={p.productName}
                        herbPriceFrom={p.minPrice}
                        herbPriceTo={p.maxPrice}
                        herbTHC={p.thc}
                        herbTalent={p.ratingsScore}
                        herbAmount={p.herbAmount}
                      />
                    </div>
                  ))
                // )
              }
              <span
                onClick={showMoreProduct}
                className=" text-[16px] text-[#41057E] underline mt-3 cursor-pointer"
              >
                mehr anzeigen
              </span>
            </div>
          </div>
          <div className=" md:block hidden ml-[40px] mt-3 text-[14px] text-[#6D6D6D]">
            *Mögliche medizinsche Wirkung
          </div>
          <Button
            content="zur Übersicht"
            onClick={() => seeOverview()}
            className=" w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)]
            rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white mt-5 "
          />
        </div>
        {selectedHerb && (
          <div className="fixed inset-0 flex -webkit-flex items-center 550px:w-full  px-3 justify-center bg-purple-500 bg-opacity-75 z-50">
            <div className="relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-[-40px] right-[0.2rem]  text-custom-purple hover:text-gray-700 text-3xl font-extrabold"
              >
                &times;
              </button>
              <div className="550px:w-[505px] w-320px">
                <CPreHerb
                  herbCBD={selectedHerb.cbd}
                  herbGenetik={selectedHerb.genetic}
                  // herbImg={selectedHerb.imgUrl}
                  herbImg="/Img/herb (9).png"
                  herbKultivar={selectedHerb.productClass}
                  herbName={selectedHerb.productName}
                  herbPriceFrom={selectedHerb.minPrice}
                  herbPriceTo={selectedHerb.maxPrice}
                  herbTHC={selectedHerb.thc}
                  herbTalent={selectedHerb.ratingsScore}
                />
                <div className="p-5   mx-auto 550px:w-[505px] 360px:w-[350px] 493px:w-[480px] w-[310px] bg-[#FFFFFF] rounded-[30px] h-auto">
                  <div className="flex -webkit-flex flex-col items-center">
                    <div className="flex -webkit-flex justify-between w-full">
                      <p className="text-custom-black font-extrabold">
                        Wählen Sie Ihre gewünschte Menge
                      </p>
                      <span className="w-[80px] h-[22px] rounded-[60px] bg-[#41057E12] flex -webkit-flex justify-center items-center text-[10px]">
                        {number} Gramm
                      </span>
                    </div>
                    <CPreAmountRange
                      herbAmount={herbAmount}
                      setHerbAmount={setHerbAmount}
                      selectedHerb={selectedHerb}
                    />

                    <Button
                      content="hinzufügen"
                      onClick={() => {
                        gotoOverview();
                      }}
                      className={`multi-select ${
                        herbAmount > 0
                          ? "w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)] rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white mt-5"
                          : "disable-attr w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)] rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white mt-5"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`multi-select ${
          showOverView
            ? "flex -webkit-flex flex-col md:max-w-[820px] lg:px-[0px]  md:px-[16px]  sm:max-w-screen-sm w-full px-[15px] mb-12 mx-auto  h-auto min-h-[100vh]"
            : "hidden"
        }`}
      >
        {selectedHerbList?.map((p: any, index: any) => (
          <div
            className=" w-full"
            key={index + 1}
            onClick={() => handleHerbClick(p)}
          >
            <CPreHerb
              herbCBD={p.cbd}
              herbGenetik={p.genetic}
              // herbImg={p.imgUrl}
              herbImg="/Img/herb (9).png"
              herbKultivar={p.productClass}
              herbName={p.productName}
              herbPriceFrom={p.minPrice}
              herbPriceTo={p.maxPrice}
              herbTHC={p.thc}
              herbTalent={p.ratingsScore}
              herbAmount={p.herbAmount}
              removeHerbAmount={removeHerbAmount}
              index={index}
            />
          </div>
        ))}
        <div className="flex -webkit-flex flex-col w-full">
          <Button
            content="Auswahl bestätigen"
            onClick={() => setIsStep(1)}
            className={
              "w-full bg-[rgba(65,5,126,1)] hover:border-[3px] hover:border-[rgba(65,5,126,1)] hover:bg-white hover:text-[rgba(65,5,126,1)] rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-white"
            }
          />
          <Button
            content="weiteres Präparat hinzufügen"
            onClick={() => seeOverview()}
            className={
              "w-full bg-white border-custom-purple hover:border-custom-purple border-[3px] hover:bg-[rgba(65,5,126,1)] hover:text-white rounded-[60px] px-[20px] py-[10px] text-[16px] font-bold text-[rgba(65,5,126,1)] mt-5"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Prepare;
