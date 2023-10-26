import Navbar from './components/navbar'
import Products from './components/products'
import Carousel from './components/carousel';
import SwitchButton from './components/btnlike'
import DefaultSlider from './components/slider'
import Footer from './components/footer'
import ArcadeImage from './assets/arcade.png' 
import StrategyImage from './assets/strategy.png'
import ActionImage from './assets/action.png'
import ShowAllImage from './assets/showAll.png'
import { useState, useEffect, useCallback } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Game } from './interfaces';


function App() {
  console.log("App component rendered");

  const appiKey = "3600ce4463704388b9b4409c8999cc83";

  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(0);


  useEffect(() => {
    console.log("useEffect is running for page:", page);
    loadMore();  // Fetch data for the first page immediately after mounting
  }, []);
  
  async function fetchData(pageNumber: number) {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=${appiKey}&page=${pageNumber}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setGames(prevGames => [...prevGames, ...data.results]); // This appends new games to the existing ones
    } catch (error) {
      console.error(error);
    }
  }

  const loadMore = useCallback(() => {
    const newPage = page + 1;
    setPage(newPage);
    fetchData(newPage);
  }, [page, appiKey]);

  return (
    <>
      <Navbar></Navbar>
      <div id="main_container" className= "container mx-auto pt-14">
        <div className="flex h-full">
          <div className='w-3/5 mr-8'>
            <Carousel></Carousel>
          </div>

          <div className='flex flex-wrap w-2/5 text-white'>
            <div className='flex flex-col items-center w-1/2 p-4 mb-4 cursor-pointer' 
            style={{ backgroundImage: `url(${ArcadeImage})`,
            backgroundSize: 'contain',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: '75px'
          }}>
            <div className='mb-2 h-24 w-24'>
              </div>
              <div>
                <h4 className='text-lg font-bold'>Arcade</h4>
              </div>
              <div>
                156 games  
              </div>
            </div>
            <div className='flex flex-col items-center w-1/2 p-4 mb-4 cursor-pointer'
            style={{ backgroundImage: `url(${StrategyImage})`,
            backgroundSize: 'contain',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: '75px'
          }}>
              <div className='mb-2 h-24 w-24'>
              </div>
              <div>
              <h4 className='text-lg font-bold'>Strategy</h4>

              </div>
              <div>
                312 games  
              </div>
            </div>
            <div className='flex flex-col items-center w-1/2 p-4 rounded-md cursor-pointer'
            style={{ backgroundImage: `url(${ActionImage})`,
            backgroundSize: 'contain',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: '75px'
          }}>
              <div className='mb-2 h-24 w-24'>
              </div>
              <div>
              <h4 className='text-lg font-bold'>Action</h4>

              </div>
              <div>
                290 games  
              </div>
            </div>
            <div className='flex flex-col items-center w-1/2 p-4 rounded-md cursor-pointer'
            style={{ backgroundImage: `url(${ShowAllImage})`,
            backgroundSize: 'contain',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: '75px'
          }}>
              <div className='mb-2 h-24 w-24'>
              </div>
              <div>
              <h4 className='text-lg font-bold'>Show All</h4>
              </div>
              <div>
                +25 categories  
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold pt-7">Our Products</h1>
        <div className='flex justify-between pt-7'>
            <SwitchButton></SwitchButton>  
            <DefaultSlider></DefaultSlider>    
        </div>
        <div className='pt-14'>
          <Products games={games}></Products>
        </div>
        <div className='flex justify-center mt-14'>
        <button 
          onClick={loadMore} 
          className='flex justify-center w-64 border border-[#d8402a] rounded-full text-[#d8402a] p-4 text-xl font-bold'
        >
          Show More
          <ChevronDownIcon className='text-[#d8402a] h-6 w-6 ml-2'></ChevronDownIcon>
        </button>
      </div>
      </div>
      <div className='pt-14'>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
