import reducer, { setCharacters } from './homePageSlice';
import { IHomePageState } from "./types";

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ charactersList: null })
});

/*test('should handle a todo being added to an empty list', () => {
    const previousState: IHomePageState = { charactersList: null} 
  
    expect(reducer(previousState, setCharacters({"charactersList": {"__typename": "Characters", "info": {"count": 826, "next": 3, "pages": 42, "prev": 1}, "results": [{"id": "21", "image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg", "location": {"__typename": "Location", "name": "Citadel of Ricks"}, "name": "Aqua Morty", "species": "Humanoid", "status": "unknown", "type": "Fish-Person"}]}}))
    ).toEqual([{"charactersList": {__typename: 'Characters', 
        info: {count:826, next: 3,pages: 42,prev: 1}, 
        results: [
            { 
                id:"21",
                image:"https://rickandmortyapi.com/api/character/avatar/21.jpeg",
                location: {__typename: 'Location', name: 'Citadel of Ricks'},
                name: "Aqua Morty",
                species: "Humanoid",
                status: "unknown",
                type: "Fish-Person" 
            }]
        }
    }])
  })*/