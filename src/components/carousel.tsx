import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";
import img4 from "../assets/c4.png";
import img5 from "../assets/c5.png";

import { Carousel } from 'flowbite-react';

export default function DefaultCarousel() {
  return (
    <Carousel className='border rounded-3xl overflow-hidden'>
      <img
        alt="..."
        src={img1}
        className="w-full h-full object-cover"
      />
      <img
        alt="..."
        src={img2}
        className="w-full h-full object-cover"
      />
      <img
        alt="..."
        src={img3}
        className="w-full h-full object-cover"
      />
      <img
        alt="..."
        src={img4}
        className="w-full h-full object-cover"
      />
      <img
        alt="..."
        src={img5}
        className="w-full h-full object-cover"
      />
    </Carousel>
  )
}



  

