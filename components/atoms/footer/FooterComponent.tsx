'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-[rgba(241,236,245)] rounded-t-[36px] mt-[-20px]  h-[180px] max-xl:h-auto flex -webkit-flex justify-between items-center px-[21rem]  max-[1459px]:px-[10rem] max-md:px-[2rem] max-[493px]:gap-4 max-[493px]:items-start'>
      <div className='w-full h-auto max-[493px]:mt-9 mr-5'>
        <Link href="#" className='cursor-pointer'><Image src='/Icon/logo.png' alt='logo' width={124} height={80} className=''/></Link>
      </div>
      <div className='flex -webkit-flex justify-center items-center gap-[5rem] max-lg:flex-wrap max-[1317px]:gap-[2rem] max-[1317px]:mt-[2rem] max-[1317px]:mb-[2rem]  max-[493px]:gap-[1rem] max-[493px]:flex-col max-[493px]:items-start'>
        <Link href= "#"><span className='cursor-pointer'>AGB </span></Link>
        <Link href= "#"><span className='cursor-pointer'>Impressum </span></Link>
        <Link href= "#"><span className='cursor-pointer'>Datenschutz </span></Link>
        <Link href= "#"><span className=' text-[rgba(65,5,126,1)]'>support@privatrezept.net </span></Link>
      </div>
    </div>
  )
}

export default Footer