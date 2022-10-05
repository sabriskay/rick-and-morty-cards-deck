import React from 'react';
import './App.css';
import { ApolloProvider } from "@apollo/react-hooks";
import GetCharacters from './Components/GetCharacters';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,
});

function App() {
  return (<React.StrictMode>
      <ApolloProvider client={client}>
        <GetCharacters/>
      </ApolloProvider>
  </React.StrictMode>
  );
}

export default App;
