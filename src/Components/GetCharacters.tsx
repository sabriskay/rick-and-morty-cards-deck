import React, { useState } from 'react';
import {GET_CHARACTERS_QUERY} from '../GraphQL/Queries';
import { useQuery } from "@apollo/react-hooks";

function GetCharacters() {
  const { data, loading, error } = useQuery(GET_CHARACTERS_QUERY);

  

  const characters = data?.characters

  if (loading) return <p>Almost there...</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <pre>
        {JSON.stringify(characters, null, "  ")}
      </pre>
    </>
  )
}

export default GetCharacters