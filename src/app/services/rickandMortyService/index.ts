import { GetCharacters } from "./__generated__/GetCharacters";
import { client } from "../../graphql";
import { GET_CHARACTERS_QUERY } from "./querie";

class RickyandMortyService {
  async getCharacters(page: number): Promise<GetCharacters["characters"]> {
    const response = await client.query({
      query: GET_CHARACTERS_QUERY,
      variables: { page },
    });

    if (!response || !response.data) {
      console.log("Cannot get characters list!");
    }
    return response.data.characters;
  }
}

export default new RickyandMortyService();
