import React from 'react';
import './App.css';
import { ApolloProvider } from "@apollo/react-hooks";
import CharactersLayout from './Components/CharactersLayout';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { Provider } from "react-redux";
import store from './app/store'

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
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <CharactersLayout/>
        </Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

export default App;
