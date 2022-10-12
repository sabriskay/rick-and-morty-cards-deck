import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IHomePageState } from "./types";

const initialState: IHomePageState = {
  charactersList: null
}

const CharactersSlice: Slice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.charactersList = action.payload
    }
  }
});


const { actions, reducer } = CharactersSlice;
export const { setCharacters } = actions;
export default reducer;
