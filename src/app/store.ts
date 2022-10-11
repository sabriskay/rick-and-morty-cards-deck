import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import CharactersReducer from './reducers/Characters';

const store = configureStore({
    reducer: {
        characters: CharactersReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;