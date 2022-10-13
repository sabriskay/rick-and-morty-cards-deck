import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ReduxLogger from 'redux-logger';
import homePageReducer from './containers/HomePage/homePageSlice'

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(ReduxLogger);

const store = configureStore({
  middleware,
  reducer: {
      homePage: homePageReducer
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