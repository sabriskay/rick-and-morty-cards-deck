import React from "react";
import { createSelector } from "reselect";
import { makeSelectCharacters } from "./selectors";
import { useAppSelector } from "../../hooks";
import styled from "styled-components";
import Card from "../../components/Card";
import {
  GetCharacters_characters,
  GetCharacters_characters_results,
} from "../../services/rickandMortyService/__generated__/GetCharacters";

const stateSelector = createSelector(
  makeSelectCharacters,
  (charactersList) => ({
    charactersList,
  }),
);

const Playground = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

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
`;

export function Characters() {
  const [active, setActive] = React.useState<number | undefined | null>(
    undefined,
  );

  //TODO check type
  const {
    charactersList,
  }: { charactersList: GetCharacters_characters | null } =
    useAppSelector(stateSelector);

  const switchActive = (id: number | undefined | null) => {
    if (active === id) {
      setActive(undefined);
    } else {
      setActive(id);
    }
  };

  return (
    <Playground data-cy={"playground"}>
      <Blur
        data-cy={"blur"}
        style={{
          backdropFilter: active ? "opacity(1) blur(10px)" : "opacity(0)",
        }}
      />
      {charactersList &&
        charactersList.results &&
        charactersList.results.map(
          (character: GetCharacters_characters_results | null) => (
            <Card
              key={character?.name}
              active={active === character?.id}
              onClick={switchActive}
              character={character}
            />
          ),
        )}
    </Playground>
  );
}
