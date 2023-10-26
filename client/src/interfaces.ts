export interface PlatformDetails {
    id: number;
    name: string;
  }
  
  export interface Genre {
    name: string;
  }
  
  export interface Platform {
    platform: PlatformDetails;
  }
  
  export interface Game {
    id: number;
    name: string;
    platforms: Platform[];
    genres: Genre[];
    background_image: string;
  }