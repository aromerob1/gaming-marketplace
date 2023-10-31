import React from "react";
import { useState } from "react";
import ReactSlider from "react-slider";

const max = 300;
const min = 15;

function SliderComponent() {
  console.log("Slider");
  const [values, setValues] = useState([min, max]);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-0 lg:flex-row">
      <div className="whitespace-nowrap mb-2 lg:mb-0 hidden lg:block">Price Range</div>
      <div className="text-[#d8402a] mb-2 lg:mb-0 lg:mr-2">
        ${values[0]}-${values[1]}
      </div>
      <ReactSlider
        className="horizontal-slider bg-[#aec2da] w-64 h-1 border border-gray-300 slider "
        value={values}
        min={min}
        max={max}
        onChange={setValues}
        minDistance={10}
      ></ReactSlider>
    </div>
  );
}

const Slider = React.memo(SliderComponent);

export default Slider;

