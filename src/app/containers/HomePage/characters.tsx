import React from "react"
import { createSelector } from 'reselect';
import { makeSelectCharacters } from './selectors';
import { useAppSelector } from "../../hooks";
import { ICharacter } from "./types";
import { Container, Card as MUICard, CardContent } from '@mui/material';
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import { StyledEngineProvider } from '@mui/material/styles';
import Card from '../../components/Card';
import Typography from '@mui/material/Typography';
import { transform } from "@babel/core";

const stateSelector = createSelector(makeSelectCharacters, (charactersList) => ({
    charactersList,
}));

const useStyles = makeStyles({
  card: {
    border: 0,
    boxSizing: "content-box",
    borderColor: "transparent",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#3c3e4480",
    color: "#f5f5f5"
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: "5px",
    columnGap: "2%",
  },
  cardContent: {
    right: 0,
    padding: '10px',
    position: "absolute"
  },
  title1: {
    fontWeight: 800,
    lineHeight: 1,
    textOrientation: "mixed",
    "writing-mode": "vertical-lr",
    fontSize: "1.2rem",
    textShadow: "1px 1px #02020282",
    fontFamily: 'rickandmorty'
  },
  titleStatus: {
    position: "absolute",
    color: "red",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    textOrientation: "mixed",
    "writing-mode": "vertical-lr",
    fontSize: "6em",
    transform: "rotateZ(220deg)",
    fontFamily: 'rickandmorty'
  }
})

const CardImg = styled.div` 
  margin: 5px;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Playground = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Blur = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: opacity(0);
  transition: backdrop-filter 0.2s;
  transition-duration: 300ms;
  pointer-events: none;
`

const handleShowCharacterName = () => {

}

export function Characters() {
    const [ active, setActive ] = React.useState<number | undefined>(undefined);

    const classes = useStyles();
    //TODO check type
    const { charactersList }: any = useAppSelector(stateSelector);

    const isEmptyCharactersList =
        !charactersList || !charactersList.results || charactersList.results.length === 0;

    if (isEmptyCharactersList) {
        return <div>Loading...</div>;
    }

    const switchActive = (id: number | undefined) => {
      if (active === id) {
        setActive(undefined);
      } else {
        setActive(id);
      }
    }

    return (
      <Playground>

        <Blur style={{ backdropFilter: active ? `opacity(1) blur(10px)` : `opacity(0)` }} ></Blur>
        
        {charactersList && charactersList.results && 
            charactersList.results.map((character: ICharacter) => (
              <Card key={character.name} active={active == character.id} onClick={switchActive} character={character}>
                <StyledEngineProvider injectFirst={true}>
                  <MUICard className={classes.card} onClick={handleShowCharacterName}>
                    <CardImg style={{ backgroundImage: `url(${character?.image || ""})`}} />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h2" component="p" className={classes.title1}>
                      {character.name.toUpperCase()}
                      </Typography>
                    </CardContent>
                    <Typography component="div" className={classes.titleStatus}>
                        {character.status == "Dead" && character.status.toUpperCase()}
                      </Typography>
                  </MUICard>
                </StyledEngineProvider>
              </Card>
            ))
        }
      </Playground>
    )
}