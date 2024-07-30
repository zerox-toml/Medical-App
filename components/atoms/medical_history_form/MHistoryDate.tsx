'use client'

import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';

const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
};

const MHistoryDate: React.FC = () => <DatePicker className=' bg-[#F5F5F5] w-[16.8rem] max-[650px]:w-full text-gray-700 border-none font-normal text-[14px] h-[47px] rounded-[3.75rem] py-[10px] px-[20px] pl-4 focus:outline-none flex -webkit-flex justify-center items-center hover:bg-[#F5F5F5] focus:border-none' onChange={onChange} needConfirm />;

export default MHistoryDate;