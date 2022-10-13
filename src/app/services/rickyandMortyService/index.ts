import { GetCharacters } from "./__generated__/GetCharacters";
import { client } from "../../graphql";
import { GET_CHARACTERS_QUERY } from "./querie";

class RickyandMortyService {
    async getCharacters(page: Number): Promise<GetCharacters["characters"]> {
      try {
        const response = await client.query({
          query: GET_CHARACTERS_QUERY,
          variables: { page },
        });
  
        if (!response || !response.data) {
          throw new Error("Cannot get characters list!");
        }
  
        return response.data.characters;

      } catch (err) {
        throw err;
      }
    }
  }
  
  export default new RickyandMortyService();