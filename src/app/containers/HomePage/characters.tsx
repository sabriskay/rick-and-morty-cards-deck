import React from 'react';
import { createSelector } from 'reselect';
import { makeSelectCharacters } from './selectors';
import { useAppSelector } from "../../hooks";
import { ICharacter } from "./types";
import { Box, Container } from '@mui/material';
import Card from '@mui/material/Card';
import { makeStyles } from "@mui/styles";

import styled from "styled-components";

import { StyledEngineProvider } from '@mui/material/styles';

const stateSelector = createSelector(makeSelectCharacters, (charactersList) => ({
    charactersList,
}))
const useStyles = makeStyles({
  card: {
    border: 0,
    padding: "1em",
    backgroundColor: "transparent",
    boxSizing: "content-box",
    borderColor: "transparent",
    width: "fit-content"
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
})

const CharacterDeadTextImg = styled.img` 
&+b:after {
    content: '"a string"';
    display: inline-block;
    position: relative;
    z-index: 1;
    right: 20vw;
    width: 20vw;
    font-size: 0.75rem;
    color: #930;
  }
`;
const TextDead = styled.span`
  font-size: 2rem;
  color: #ff5722;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export function Characters() {
  
    const classes = useStyles();
    //TODO check type
    const { charactersList }: any = useAppSelector(stateSelector);

    const isEmptyCharactersList =
        !charactersList || !charactersList.results || charactersList.results.length === 0;

    if (isEmptyCharactersList) {
        return <div>Loading...</div>;
    }

    return (
      <StyledEngineProvider injectFirst>
        <Container sx={{ display: 'flex' }} className={classes.container}>
            {charactersList && charactersList.results && 
                charactersList.results.map((character:ICharacter) => (
                <Card className={classes.card}>
                  <CharacterDeadTextImg src={character?.image || ""} alt={character.status} width="100" height="120"/>{character.status==="Dead" ? <TextDead>DEAD</TextDead> :""}
                </Card>
            ))}
        </Container> 
      </StyledEngineProvider>

    );
}