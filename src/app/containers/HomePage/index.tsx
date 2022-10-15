import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useAppDispatch } from "../../hooks";
import RickyandMortyService from "../../services/rickandMortyService";
import { GetCharacters } from "../../services/rickandMortyService/__generated__/GetCharacters";
import { setCharacters } from "./homePageSlice";
import { Container, Box } from "@mui/material";
import { Characters } from "./characters";

const actionDispatch = (dispatch: Dispatch) => ({
  setCharacters: (charactersList: GetCharacters["characters"]) =>
    dispatch(setCharacters(charactersList)),
});

export function HomePage() {
  const { setCharacters } = actionDispatch(useAppDispatch());

  useEffect(() => {
    (async () => {
      const charactersList = await RickyandMortyService.getCharacters(2).catch(
        (err) => {
          console.log("Error: ", err);
        },
      );

      if (charactersList && charactersList.results) {
        setCharacters(charactersList);
      }
    })();
  }, [setCharacters]);

  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Box style={{ width: "100%", height: "100%" }}>
        <Characters />
      </Box>
    </Container>
  );
}
