'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGAnythingelse } from '../../../redux/counterSlice';

const PInfoAnythingElse = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    
    const textValue = event.target.value;
    // const words = textValue.trim().split(/\s+/).filter(word => word.length > 0);
    
    if (textValue.length <= 1000) {
      setText(textValue);
      dispatch(setGAnythingelse(textValue));
      setWordCount(textValue.length);      
    }    

  };

  return (
    <div>
      <p className='text-[#161616] text-[1rem] pb-4 pt-9'>
        Möchten Sie uns noch etwas mitteilen?
      </p>
      <textarea
        className='bg-[#F5F5F5] rounded-[20px] text-[16px] w-full h-[120px] px-5 py-6 border-none focus:outline-none pinfo_textarea'
        placeholder='Bitte beschreibe uns deine bisherigen Erfahrungen'
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <div className='text-custom-grey text-[10px] mt-[-4px] flex -webkit-flex justify-end mb-5'><span>{wordCount}</span>/1000</div>
    </div>
  );
};

export default PInfoAnythingElse;
