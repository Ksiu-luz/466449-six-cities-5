import { configureStore } from '@reduxjs/toolkit';
import { createAPI, injectStore } from '../services/Api';
import cityReducer from './slices/CitySlice';
import offersReducer from './slices/OffersSlice';
import authReducer from './slices/AuthSlice';
import currentOfferReducer from './slices/CurrentOfferSlice';
import errorReducer from './slices/ErrorsSlice';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    city: cityReducer,
    offers: offersReducer,
    auth: authReducer,
    currentOffer: currentOfferReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

injectStore(store);
