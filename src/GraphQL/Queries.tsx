
import { gql } from 'graphql-request';

export const GET_CHARACTERS_QUERY = gql`
    query getCharacters {
      characters {
        results {
          name
        }
      }
    }
  `