import React, { useEffect, useState } from 'react';
import {GET_CHARACTERS_QUERY} from '../GraphQL/Queries';
import { useQuery } from "@apollo/react-hooks";
import { gql } from '@apollo/client';

interface Character {
  name: string,
  id: number,
  image: string
}

function GetCharacters() {

  const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY);

  const [characters, setCharacters] = useState<Array<Character>>([]);

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [data] );

  if (loading) return <p>Almost there...</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <div>
        {characters.map(character => (
          <>
            {character.name} <img src={character.image}></img>
          </>
        ))}
        
      </div>
    </>
  )
}

export default GetCharacters;