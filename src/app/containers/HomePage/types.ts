import { GetCharacters } from "../../services/rickyandMortyService/__generated__/GetCharacters";


export interface IHomePageState {
  charactersList: GetCharacters["characters"],
  pageCount: number
}


export interface ICharacter {
  name: string,
  id: number,
  image: string,
  species: string,
  status: string
}