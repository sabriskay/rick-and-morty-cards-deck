import React from 'react';
import './App.css';

import { GraphQLClient, gql } from 'graphql-request';

async function main() {
  const endpoint = 'https://rickandmortyapi.com/graphql'
  const graphQLClient = new GraphQLClient(endpoint)

  const GET_CHARACTERS_QUERY = gql`
    query getCharacters {
      characters {
        results {
          name, 
          id
        }
      }
    }
  `

  const data = await graphQLClient.request(GET_CHARACTERS_QUERY)
  console.log(JSON.stringify(data, undefined, 2))
}

main()

function App() {
  return (
    <></>
  );
}

export default App;
