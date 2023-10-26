'use client';

import { useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";

interface PlatformDetails {
  id: number;
  name: string;
}

interface Genre {
  name: string
}

interface Platform {
  platform: PlatformDetails;
}

interface Game {
  id: number;
  name: string;
  platforms: Platform[];
  genres: Genre[];
  background_image: string;
}

function ProductCardComponent({ game }: { game:  Game}) {
  const [isHovered, setIsHovered] = useState(false);
  const [price] = useState(Math.floor((Math.random() * 300) + 80));

  return (
    <div id="productCard" className='flex flex-col border bg-white rounded-2xl p-3 justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:z-10 cursor-pointer relative' 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div>
        <div className="w-full h-56 relative overflow-hidden border rounded-xl">
          <img src={game.background_image} alt={game.name} className='absolute top-0 left-0 w-full h-full object-cover'></img>
        </div>
        <div className='flex text-[#7297a7] mt-2 text-sm font-bold'>
        {game.genres[0].name}
        <div className="font-black mr-1 ml-1">
          ·
        </div>
        {game.platforms[0].platform.name}
        </div>
      
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            {game.name}
          </p>
        </h5>
        </div>
      
        <div className="flex justify-between mt-2 items-end"> {/* Added "items-end" */}
        <p className="text-xl font-bold tracking-tight text-[#d8402a] dark:text-gray-400">
          ${price}
        </p>
        <button className="flex p-2 px-4 bg-red-500 text-white rounded-full absolute bottom-3 right-3 opacity-0 transform translate-y-2 transition-opacity transition-transform"
        style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(2px)' }}
        >
          Add to Cart
          <ShoppingBagIcon className="w-5 h-5 ml-1"></ShoppingBagIcon>
        </button>
      </div>
    </div>
  )
}

const ProductCard = React.memo(ProductCardComponent);

export default ProductCard;

