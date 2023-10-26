import ProductCard from "./product_card"  

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

  export default function Products({ games }: { games: Game[] }) {
    return (
      <div>
        <div className="mx-auto">
          <h2 className="sr-only">Products</h2>
  
          <div id="gridProductsContainer" className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {games.map((game) => (
                <ProductCard game={game}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    )
  }
  