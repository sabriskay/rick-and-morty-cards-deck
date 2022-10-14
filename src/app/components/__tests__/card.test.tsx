import React from "react";
import renderer from "react-test-renderer";
import Card from "../Card";

const characters = [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    }
];

const MAX = 1;
const AVG = 0.5;
const MIN = 0;

describe("Card Component", () => {
    for (const mathRandomValue of [MAX, AVG, MIN]) {
        describe(`with random = ${mathRandomValue}`, () => {
            beforeEach(() => {
                jest
                    .spyOn(global.Math, "random")
                    .mockReturnValue(mathRandomValue);
            });
    
            afterEach(() => {
                jest.clearAllMocks();
            });
  
            for (const character of characters) {
                it(`renders correctly with character ${character.name} when card is Active`, () => {
                    const tree = renderer
                        .create(<Card key={character.name} active={true} character={character}/>)
                        .toJSON();
                    expect(tree).toMatchSnapshot();
                });
    
                it(`renders correctly with character ${character.name} when card is NOT Active`, () => {
                    const tree = renderer
                        .create(<Card key={character.name} active={false} character={character}/>)
                        .toJSON();
                    expect(tree).toMatchSnapshot();
                });
            }
        });
    }
});


