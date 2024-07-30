import Image from 'next/image'
import React, { useState } from 'react'

interface DoctorProps {
    docImg: string,
    countryImg: string,
    countryname: string,
    major: string,
    time: number,
    isVideo: boolean,
    isClicked: boolean,
    onClick: (type: any) => void,
}

const Doctor: React.FC<DoctorProps> = ({ docImg, countryImg, countryname, major, time, isVideo, onClick, isClicked }) => {

    return (
        <div onClick={onClick} className={`flex justify-between items-center md:px-[20px] px-[24px] py-[15px] cursor-pointer box-border ${isClicked ? "bg-[rgb(231,226,235)] border-[#41057E]" : "bg-[#ffffff] border-[#ffffff]"} border-[3px]  rounded-[30px] w-full mb-[12px] transition-all`}>
            <div className=' md:flex-row flex flex-col items-center w-full h-full'>
                <div className=' justify-center items-center flex md:w-[113px] w-full h-full'>
                    <Image src={`${docImg}.png`} alt='' width={113} height={125} className=' md:block hidden' />
                    <Image src={`${docImg}R.png`} alt='' width={113} height={150} className=' md:hidden block w-full' />
                </div>
                <div className=' flex flex-col justify-start items-start ml-[20px] h-full md:w-[80%] w-full max-md:mt-[16px]'>
                    <div className=' w-full flex md:flex-row flex-col justify-between items-start'>
                        <span className=' text-[16px] text-[#161616] font-extrabold'>Dr. Jonas Berger</span>
                        <div className=' flex items-center justify-end max-md:mt-[8px]'>
                            <span className=' md:text-[16px] text-[14px] text-[#363636]'>Land:</span>
                            <Image src='/Icon/eu.png' alt='' width={20} height={20} className=' ml-[12px] -mt-[4px]' />
                            <Image src={countryImg} alt='' width={20} height={20} className=' ml-[4px] -mt-[4px]' />
                            <span className=' md:text-[16px] text-[14px] ml-[8px] text-[#363636]'>{countryname}</span>
                        </div>
                    </div>
                    <div className=' flex md:flex-row flex-col gap-[4px] justify-start items-start md:mt-[12px] mt-[24px]'>
                        {isVideo &&
                            <div className={`px-[12px] py-[4px] flex gap-[4px] justify-start items-center ${isClicked ? "bg-[rgb(213,205,220)]" : "bg-[rgb(233,229,237)]"} rounded-[30px]`}>
                                <Image src='/Icon/video.png' alt='' width={12} height={12} className=' mt-[-2px]' />
                                <p className=' text-[#41057E] text-[12px]'>Videoanruf möglich</p>
                            </div>
                        }
                        <div className={`px-[12px] py-[4px] flex gap-[4px] justify-start items-center ${isClicked ? "bg-[rgb(213,205,220)]" : "bg-[rgb(233,229,237)]"} rounded-[30px]`}>
                            <Image src='/Icon/chat.png' alt='' width={12} height={12} />
                            <p className=' text-[#41057E] text-[12px]'>Chat möglich</p>
                        </div>
                    </div>
                    <div className=' md:mt-[7px] mt-[16px] flex md:flex-row flex-col justify-between md:items-end items-start w-full'>
                        <span className=' text-[14px] text-[#6D6D6D] flex flex-col items-start'>
                            <span>
                                Nächster Behandlungstermin:
                            </span>
                            <span className=' mt-[-2px]'>
                                Innerhalb der nächsten <span className=' text-[#363636] font-bold'> {time} Stunden</span>
                            </span>
                        </span>
                        <div className=' flex flex-col justify-end md:items-end items-start max-md:mt-[24px]'>
                            <span className='text-[14px] text-[#6D6D6D]'>{major}</span>
                            <div className=' text-[16px] text-[#41057E] font-extrabold mt-[4px]'>39,90 €</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Doctor