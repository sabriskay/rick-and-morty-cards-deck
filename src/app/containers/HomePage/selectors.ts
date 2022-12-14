import { createSelector } from "reselect";
import { IRootState } from "../../types";

const selectHomePage = (state: IRootState) => state.homePage;

export const makeSelectCharacters = createSelector(
  selectHomePage,
  (homePage) => homePage.charactersList,
);
