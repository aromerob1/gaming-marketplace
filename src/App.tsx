import Navbar from "./components/navbar";
import Products from "./components/products";
import Carousel from "./components/carousel";
import SwitchButton from "./components/btnlike";
import DefaultSlider from "./components/slider";
import Footer from "./components/footer";
import { useState, useEffect, useCallback } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Game } from "./interfaces";

function App() {
  console.log("App component rendered");

  const appiKey = "3600ce4463704388b9b4409c8999cc83";

  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log("useEffect is running for page:", page);
    loadMore(); // Fetch data for the first page immediately after mounting
  }, []);

  async function fetchData(pageNumber: number) {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${appiKey}&page=${pageNumber}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setGames((prevGames) => [...prevGames, ...data.results]); // This appends new games to the existing ones
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
      <div
        id="main_container"
        className="container mx-auto pt-14 px-4 sm:px-6 lg:px-8"
      >
        <div className="h-64 sm:h-96 lg:h-128">
          <Carousel></Carousel>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-7">
          Our Products
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <SwitchButton></SwitchButton>
          <DefaultSlider></DefaultSlider>
        </div>
        <div className="pt-14">
          <Products games={games}></Products>
        </div>
        <div className="flex justify-center mt-14 sm:flex-row">
          <button
            onClick={loadMore}
            className="flex justify-center w-full sm:w-64 border bg-[#d8402a] border-[#fffff] rounded-full text-[#ffffff] p-4 text-xl font-bold hover:bg-white hover:text-[#d8402a] hover:border-[#d8402a]"
          >
            Show More
            <ChevronDownIcon className="text-inherit h-6 w-6 ml-2"></ChevronDownIcon>
          </button>
        </div>
      </div>
      <div className="pt-14">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
