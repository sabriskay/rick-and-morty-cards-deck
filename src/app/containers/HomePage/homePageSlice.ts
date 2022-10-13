import { createSlice, Slice } from "@reduxjs/toolkit";
import { IHomePageState } from "./types";

const initialState: IHomePageState = {
  charactersList: null,
  pageCount: 0
}

const CharactersSlice: Slice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.charactersList = action.payload
    },
    setPageCount:(state, action) => {
      state.charactersList = action.payload
    }
  }
});


const { actions, reducer } = CharactersSlice;
export const { setCharacters, setPageCount } = actions;
export default reducer;
