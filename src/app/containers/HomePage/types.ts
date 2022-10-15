import { GetCharacters } from "../../services/rickandMortyService/__generated__/GetCharacters";

export interface IHomePageState {
  charactersList: GetCharacters["characters"];
}

export interface ICharacter {
  name: string;
  id: number;
  image: string;
  species: string;
  status: string;
  type: string;
}
