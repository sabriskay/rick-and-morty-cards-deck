import { createSelector } from 'reselect';
import { makeSelectCharacters } from './selectors';
import { useAppSelector } from "../../hooks";
import { ICharacter } from "./types";
import { Container, Card } from '@mui/material';
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import { StyledEngineProvider } from '@mui/material/styles';

const stateSelector = createSelector(makeSelectCharacters, (charactersList) => ({
    charactersList,
}));

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
  height: 120px;
  width: 100px;
`;
const TextDead = styled.span`
  font-size: 2rem;
  color: #ff5722;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
const handleShowCharacterName = () => {
  
}

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
                <Card className={classes.card} onClick={handleShowCharacterName}>
                  <CharacterDeadTextImg src={character?.image || ""} alt={character.status}/>
                  {character.status==="Dead" ? <TextDead>DEAD</TextDead> :""}
                </Card>
            ))}
        </Container> 
      </StyledEngineProvider>

    );
}