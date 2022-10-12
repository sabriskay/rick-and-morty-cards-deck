import { GetCharacters } from "../../services/rickyandMortyService/__generated__/GetCharacters";


export interface IHomePageState {
  charactersList: GetCharacters["characters"]
}