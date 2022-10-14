import { GetCharacters } from "../../services/rickyandMortyService/__generated__/GetCharacters";

export interface IHomePageState {
  charactersList: GetCharacters["characters"];
}

type Location = {
  name: string;
};

export interface ICharacter {
  name: string;
  id: number;
  image: string;
  species: string;
  status: string;
  type: string;
  location: Location;
}
