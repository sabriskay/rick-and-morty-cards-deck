import gql from "graphql-tag";

export const GET_CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        status
        image
        species
        type
        location {
          name
        }
      }
    }
  }
`;
