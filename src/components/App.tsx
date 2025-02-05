import React from 'react';
import { MainScreen } from '../pages/MainScreen/MainScreen.tsx';
import { Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../pages/LoginScreen/LoginScreen.tsx';
import { FavoritesScreen } from '../pages/FavoritesScreen/FavoritesScreen.tsx';
import { OfferScreen } from '../pages/OfferScreen/OfferScreen.tsx';
import { AppRoutes } from '../props/Constants.ts';
import PrivateRoute from './PrivateRoute/PrivateRoute.tsx';
import { NotFoundScreen } from '../pages/NotFoundScreen/NotFoundScreen.tsx';

export function App(): React.JSX.Element {
  return (
    <Routes>
      <Route
        index
        path={AppRoutes.Main}
        element={<MainScreen/>}
      />
      <Route
        path={AppRoutes.Login}
        element={<LoginScreen />}
      />
      <Route
        element={<PrivateRoute />}
      >
        <Route
          path={AppRoutes.Favorites}
          element={<FavoritesScreen />}
        />
      </Route>
      <Route
        path={AppRoutes.Offer}
        element={<OfferScreen />}
      />
      <Route
        path={AppRoutes.NotFound}
        element={<NotFoundScreen />}
      />
    </Routes>
  );
}
