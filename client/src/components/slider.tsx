import React from 'react';
import { useState } from 'react';
import ReactSlider from 'react-slider'

const max = 300; 
const min = 15;

function SliderComponent() {
  console.log("Slider")
  const [values, setValues] = useState([min, max])

  return (
    <div className='flex items-center space-x-4 w-1/3'>
      <div className='whitespace-nowrap'>
        Price Range
      </div>
      <div className='text-[#d8402a]'>
        ${values[0]}-${values[1]}
      </div>
      <ReactSlider className="horizontal-slider bg-[#aec2da] w-full h-1 border border-gray-300 slider " value={values} min={min} max={max} onChange={setValues}
      minDistance={10}></ReactSlider> 
    </div>
       
    


  );
}

const Slider = React.memo(SliderComponent);

export default Slider;