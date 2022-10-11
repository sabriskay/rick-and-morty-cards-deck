import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from '@reduxjs/toolkit'

const charactersSlice: Slice = createSlice({
  name: "characters",
  initialState: [],
  reducers: {
    setCharacters: (_, action: PayloadAction) => {
      return action.payload;
    }
  }
});

const { actions, reducer } = charactersSlice;
export const { setCharacters } = actions;
export default reducer;
