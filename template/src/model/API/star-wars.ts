export namespace IStarWars {
  export namespace People {
    export interface Response {
      count: number;
      next: string;
      previous?: string | null;
      results: Item[];
    }

    export interface Item {
      name: string;
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      homeworld: string;
      films: string[];
      species: string[];
      vehicles: string[];
      starships: string[];
      created: string;
      edited: string;
      url: string;
    }
  }
}
