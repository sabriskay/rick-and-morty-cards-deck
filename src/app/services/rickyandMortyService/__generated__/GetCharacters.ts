/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCharacters
// ====================================================

export interface GetCharacters_characters_info {
  __typename: "Info";
  /**
   * The amount of pages.
   */
  pages: number | null;
  /**
   * The length of the response.
   */
  count: number | null;
  /**
   * Number of the next page (if it exists)
   */
  next: number | null;
  /**
   * Number of the previous page (if it exists)
   */
  prev: number | null;
}

export interface GetCharacters_characters_results {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
}

export interface GetCharacters_characters {
  __typename: "Characters";
  info: GetCharacters_characters_info | null;
  results: (GetCharacters_characters_results | null)[] | null;
}

export interface GetCharacters {
  /**
   * Get the list of all characters
   */
  characters: GetCharacters_characters | null;
}

export interface GetCharactersVariables {
  page: number;
}
