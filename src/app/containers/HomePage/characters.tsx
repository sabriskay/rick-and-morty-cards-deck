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
  title1: {
    fontWeight: 800,
    lineHeight: 1
  },
  body1: {
    color: "#fff",
    fontSize: "0.55em"

  }
})

const CardImg = styled.div` 
  margin: 5px 5px 0;
  height: 65%;
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

    /*return (
      <StyledEngineProvider injectFirst>
        <Container sx={{ display: 'flex' }} className={classes.container}>
            {charactersList && charactersList.results && 
                charactersList.results.map((character:ICharacter) => (
                <MUICard className={classes.card} onClick={handleShowCharacterName}>
                  <CharacterDeadTextImg src={character?.image || ""} alt={character.status}/>
                </MUICard>
            ))}
        </Container> 
      </StyledEngineProvider>

    );*/

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
                    <CardContent sx={{ display: 'grid', padding: '10px' }}>
                      <Typography variant="subtitle1" component="div" className={classes.title1}>
                      {character.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" className={classes.body1}>
                        {character.species} - {character?.type || ""}
                      </Typography>
                      <Typography variant="subtitle2" component="span">
                        Last known location:
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontSize="0.55em">
                        {character.location?.name}
                      </Typography>
                    </CardContent>
                  </MUICard>
                </StyledEngineProvider>
              </Card>
            ))
        }
      </Playground>
    )
}