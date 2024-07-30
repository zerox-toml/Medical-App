import Image from 'next/image'
import React, { useState } from 'react'

interface PharmacyProps {
    pharmacyImg: string,
    name: string,
    location: string,
    price: string,
    extraServ?: string,
    isServ: boolean,
    isClicked?: boolean,
    isSearch?: boolean,
    onClick?: (type: any) => void,
}

const Pharmacy: React.FC<PharmacyProps> = ({ pharmacyImg, name, location, price, extraServ,isSearch, isServ, onClick, isClicked }) => {

    return (
        <div>
            {isClicked && !isSearch &&
                <div className='absolute w-[138px] h-[78px] rounded-[10px] -mt-[30px] z-[0] px-8 py-[6px] text-[14px] text-white text-center bg-[#41057E]'>zehr beliebt</div>
            }
            <div onClick={onClick} className={`flex -webkit-flex  justify-between items-center relative z-[10] md:px-[20px] px-[24px] py-[15px] cursor-pointer box-border ${isClicked ? "bg-[rgb(232,226,235)] border-[#41057E] mt-[43px]" : "bg-[#ffffff] border-[#ffffff]"} border-[3px]  rounded-[30px] w-full mb-[12px] transition-all`}>
                <div className=' flex -webkit-flex items-start justify-start w-full h-full '>
                    <div className=' justify-start items-start flex -webkit-flex w-[60px] h-full'>
                        <Image src={`${pharmacyImg}.png`} alt='' width={60} height={60} />
                    </div>
                    <div className=' flex -webkit-flex flex-col justify-start items-start ml-[20px] h-full w-full'>
                        <div className=' w-full flex -webkit-flex md:flex-row flex-col justify-between items-start'>
                            <div className=' flex -webkit-flex flex-col gap-1 justify-start items-start'>
                                <span className=' md:text-[20px] text-[16px] text-[#161616] font-extrabold'>{name}</span>
                                <div className=' flex -webkit-flex md:flex-row flex-col gap-[4px] justify-start items-start'>
                                    <div className={` flex -webkit-flex gap-[4px] justify-start items-center`}>
                                        <Image src='/Img/Group.png' alt='' width={14} height={14} />
                                        <p className=' text-[#6D6D6D] text-[14px] mt-[1px]'>{location}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex -webkit-flex items-start md:items-center md:flex-row flex-col md:justify-end justify-start max-md:mt-[8px] gap-[8px]'>
                                <Image src='/Img/Rating.png' alt='' width={113} height={22} className=' -mt-[4px]' />
                                <div className={`px-[12px] py-[4px] flex -webkit-flex gap-[4px] justify-start items-center ${isClicked ? "bg-[rgb(252,250,253)]" : "bg-[rgb(233,229,237)]"} rounded-[30px]`}>
                                    <p className=' text-[#363636] text-[10px]'>sofort verfügbar</p>
                                </div>
                            </div>
                        </div>

                        <div className=' md:mt-[24px] mt-[30px] flex -webkit-flex md:flex-row flex-col justify-between md:items-end items-start w-full'>
                            {isServ ?
                                <div className=' text-[14px] text-[#6D6D6D] flex -webkit-flex flex-col items-start gap-2'>
                                    <div className={`px-[12px] py-[4px] flex -webkit-flex gap-[4px] justify-start items-center bg-[rgb(237,247,245)] rounded-[30px]`}>
                                        <Image src='/Img/Frame27.png' alt='' width={16} height={16} className=' mt-[-2px]' />
                                        <p className=' text-[#008E6C] text-[16px]'>Videoanruf möglich</p>
                                    </div>
                                    <div className={`px-[12px] py-[4px] flex -webkit-flex gap-[4px] justify-start items-center bg-[rgb(237,247,245)] rounded-[30px]`}>
                                        <Image src='/Img/Frame27.png' alt='' width={16} height={16} />
                                        <p className=' text-[#008E6C] text-[16px]'>{extraServ}</p>
                                    </div>
                                </div> : <div></div>
                            }
                            <div className=' flex -webkit-flex justify-end md:items-end items-center max-md:mt-[24px] gap-[8px]'>
                                <span className='text-[14px] text-[#6D6D6D] flex -webkit-flex justify-center items-center'>Gesamtbetrag</span>
                                <div className=' text-[16px] text-[#41057E] font-extrabold mt-[4px]'>{price} €</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Pharmacy