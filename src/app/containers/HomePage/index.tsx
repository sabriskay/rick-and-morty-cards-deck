import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { useAppDispatch } from "../../hooks";
import RickyandMortyService from "../../services/rickyandMortyService";
import { GetCharacters } from "../../services/rickyandMortyService/__generated__/GetCharacters";
import { setCharacters } from "./homePageSlice";
import { Container, Box, Paper } from '@mui/material';
import { Characters } from './characters';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface IHomePageProps {}

const actionDispatch = (dispatch: Dispatch) => ({
  setCharacters: (charactersList: GetCharacters["characters"]) => dispatch(setCharacters(charactersList)),
});


export function HomePage(props: IHomePageProps) {
  const { setCharacters } = actionDispatch(useAppDispatch());
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(parseInt(event.target.value));
  };


  const fetchCharactersList = async () => {
    const charactersList = await RickyandMortyService.getCharacters(page).catch((err) => {
      console.log("Error: ", err);
    });

    if (charactersList && charactersList.info) {
      setCharacters(charactersList);
      
      if (charactersList.info.pages && charactersList.info.pages != pagesCount) {
        setPagesCount(charactersList?.info?.pages);
      }
    }

  };

  useEffect(() => {
    fetchCharactersList();
  }, [page]);

  const pagesValue = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesValue.push({value: i, label: i});
  }

  /**
   * <Paper>
        <Box mt={4} padding={2}>
        <TextField
            id="select-page"
            select
            label="Select Page"
            value={page}
            onChange={handleChange}
            helperText="Please select page"
          >
            {pagesValue.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        </Paper>
   */

  return (
    <Container style={{ width: '100%', height: '100%' }}>
      <Box style={{ width: '100%', height: '100%' }}>
        <Characters/>
      </Box>
    </Container>  
  );
}