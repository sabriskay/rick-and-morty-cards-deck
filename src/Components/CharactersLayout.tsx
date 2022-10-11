import { useEffect } from 'react';
import {GET_CHARACTERS_QUERY} from '../GraphQL/Queries';
import { useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import store, { RootState } from '../app/store';
import { setCharacters } from '../app/reducers/Characters';

interface Character {
  name: string,
  id: number,
  image: string
}

// TODO - Ver tipos
function CharactersLayout({ characters, setCharacters }: { characters: Array<Character>, setCharacters: unknown }) {
  const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY);

  useEffect(() => {
    if (data) {
      // @ts-ignore
      store.dispatch(setCharacters(data.characters.results));
    }
  }, [ data ] );

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

export default connect(
  (state: RootState) => state,
  { 
    setCharacters
  }
)(CharactersLayout);
