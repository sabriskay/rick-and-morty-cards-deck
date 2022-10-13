import { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { useAppDispatch, useAppSelector } from "../../hooks";
import RickyandMortyService from "../../services/rickyandMortyService";
import { GetCharacters, GetCharacters_characters_info } from "../../services/rickyandMortyService/__generated__/GetCharacters";
import { setCharacters, setPageCount } from "./homePageSlice";
import { Container, Box, Paper } from '@mui/material';
import { Characters } from './characters';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { makeSelectCharactersCountPage } from "./selectors";
import { createSelector } from "reselect";

interface IHomePageProps {}

const actionDispatch = (dispatch: Dispatch) => ({
  setCharacters: (charactersList: GetCharacters["characters"]) => dispatch(setCharacters(charactersList)),
  //setPageCount: (pageCount: GetCharacters_characters_info["count"]) => dispatch(setPageCount(pageCount)),
});

const pages = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
];

const stateSelector = createSelector(makeSelectCharactersCountPage, (pageCount) => ({
  pageCount,
}))

export function HomePage(props: IHomePageProps) {
  const { setCharacters } = actionDispatch(useAppDispatch());
  const [page, setPage] = useState(0);

  
  //const { pageCount }: any = useAppSelector(stateSelector);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(parseInt(event.target.value));
  };

  const fetchCharactersList = async () => {
    const charactersList = await RickyandMortyService.getCharacters(page).catch((err) => {
      console.log("Error: ", err);
    });

    if (charactersList && charactersList.info) {
      console.log("farryttryrts",charactersList)
      setCharacters(charactersList);
      setPageCount(charactersList.info.pages)
    }

  };

  useEffect(() => {
    fetchCharactersList();
  }, [page]);

  return (
    <Container>
      <Paper>
        <Box mt={4} padding={2}>
        <TextField
            id="select-page"
            select
            label="Select Page"
            value={page}
            onChange={handleChange}
            helperText="Please select page"
          >
            {pages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        </Paper>
      <Box>
        <Characters/>
      </Box>
    </Container>  
  );
}