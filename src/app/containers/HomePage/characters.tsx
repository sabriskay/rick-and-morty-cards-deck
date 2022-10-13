import React from 'react';
import { createSelector } from 'reselect';
import { makeSelectCharacters } from './selectors';
import { useAppSelector } from "../../hooks";
import { ICharacter } from "./types";
import { Box, Container } from '@mui/material';
import Card from '@mui/material/Card';
import { makeStyles } from "@mui/styles";

import styled from "styled-components";

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
    display: "flex",
    flexDirection: "row"
  }
})

export function Characters() {
  
    const classes = useStyles();
    //TODO check type
    const { charactersList }: any = useAppSelector(stateSelector);
    console.log("charactersList", charactersList)

    const isEmptyCharactersList =
        !charactersList || !charactersList.results || charactersList.results.length === 0;

    if (isEmptyCharactersList) {
        return <div>Loading...</div>;
    }

    return (
        <Container className={classes.container}>
            {charactersList && charactersList.results && 
                charactersList.results.map((character:ICharacter) => (
                <Card className={classes.card}>
                  <img src={character?.image || ""} alt={`alt-${character.name}`}/>
                </Card>
            ))}   
        </Container> 
    );
}