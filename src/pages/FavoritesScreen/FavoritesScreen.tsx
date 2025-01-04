import React from 'react';
import { Layout } from '../../components/Layout';
import { useAppSelector } from '../../store/Hooks';
import { FavoritesList } from './FavoritesList';

export function FavoritesScreen(): React.JSX.Element {
  const favorites = useAppSelector((state) => state.offers.favorites);

  return (
    <div className="page">
      <Layout showFooter>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList offers={favorites} />
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}
