'use client'

import React, { useEffect } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import { setBirthday } from '../../../redux/counterSlice';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const MHistoryDate: React.FC = () => {
    const datse = useSelector((state: any) => state.counter.birthday);
    const dispatch = useDispatch();
    const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
        if (dateString) {
            dispatch(setBirthday(dateString));
        }
    };
    return (
        <DatePicker placeholder='Geburtsdatum' className=' bg-[#F5F5F5] w-[16.8rem] max-[650px]:w-full text-gray-700 border-none font-normal text-[16px] h-[47px] rounded-[3.75rem] py-[10px] px-[20px] pl-4 focus:outline-none flex -webkit-flex justify-center items-center hover:bg-[#F5F5F5] focus:border-none' onChange={onChange} needConfirm />
    );
};

export default MHistoryDate;
