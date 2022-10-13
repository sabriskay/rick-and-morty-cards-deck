import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { useAppDispatch } from "../../hooks";
import RickyandMortyService from "../../services/rickyandMortyService";
import { GetCharacters } from "../../services/rickyandMortyService/__generated__/GetCharacters";
import { setCharacters } from "./homePageSlice";
import { Container, Box, Paper } from '@mui/material';
import { Characters } from './characters';

interface IHomePageProps {}

const actionDispatch = (dispatch: Dispatch) => ({
  setCharacters: (charactersList: GetCharacters["characters"]) => dispatch(setCharacters(charactersList)),
});


export function HomePage(props: IHomePageProps) {
  const { setCharacters } = actionDispatch(useAppDispatch());

  const fetchCharactersList = async () => {
    const charactersList = await RickyandMortyService.getCharacters(2).catch((err) => {
      console.log("Error: ", err);
    });

    if (charactersList && charactersList.info) {
      setCharacters(charactersList);
    }
  };

  useEffect(() => {
    fetchCharactersList();
  }, []);


  return (
    <Container style={{ width: '100%', height: '100%' }}>
      <Box style={{ width: '100%', height: '100%' }}>
        <Characters/>
      </Box>
    </Container>  
  );
}