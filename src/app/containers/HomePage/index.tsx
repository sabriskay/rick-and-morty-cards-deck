import { useEffect } from "react";
import { Dispatch } from "redux";
import { useAppDispatch } from "../../hooks";
import RickyandMortyService from "../../services/rickyandMortyService";
import { GetCharacters } from "../../services/rickyandMortyService/__generated__/GetCharacters";
import { setCharacters } from "./homePageSlice";
import { Container } from '@mui/material';
import { Characters } from './characters';

interface IHomePageProps {}

const actionDispatch = (dispatch: Dispatch) => ({
  setCharacters: (charactersList: GetCharacters["characters"]) => dispatch(setCharacters(charactersList)),
});

export function HomePage(props: IHomePageProps) {
  const { setCharacters } = actionDispatch(useAppDispatch());

  const fetchCharactersList = async () => {
    const charactersList = await RickyandMortyService.getCharacters(0).catch((err) => {
      console.log("Error: ", err);
    });

    console.log("Characters", charactersList);
    if (charactersList) {
      setCharacters(charactersList);
    } 
  };

  useEffect(() => {
    fetchCharactersList();
  }, []);

  return (
    <Container maxWidth="sm">
        <Characters/>
    </Container>
  );
}