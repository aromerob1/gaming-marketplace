import React, { useState } from 'react';

function SwitchButton() {
  
  const [isOptionA, setIsOptionA] = useState(true);

  return (
    <div className="flex items-center bg-white border-0 rounded-full">
      <button
        className={`px-4 py-2 border-0 rounded-full ${isOptionA ? 'bg-[#D8402A] text-white' : 'bg-white text-[#D8402A]'}`}
        onClick={() => setIsOptionA(true)}
      >
        Bestsellers
      </button>
      <button
        className={`px-4 py-2 border-0 ${isOptionA ? 'bg-white text-[#D8402A] rounded-r-full' : 'bg-[#D8402A] text-white rounded-full'}`}
        onClick={() => setIsOptionA(false)}
      >
        Newest
      </button>
    </div>
  );
}

export default SwitchButton;
