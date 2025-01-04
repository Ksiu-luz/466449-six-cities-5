import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { useAppSelector } from '../../store/Hooks';
import { FavoritesList } from './FavoritesList';
import cn from 'classnames';

export function FavoritesScreen(): React.JSX.Element {
  const favorites = useAppSelector((state) => state.offers.favorites);
  const isEmpty = favorites.length === 0;

  return (
    <div className="page">
      <Layout showFooter>
        <main
          className={cn('page__main', 'page__main--favorites', {
            'page__main--favorites-empty': isEmpty,
          })}
        >
          <div className="page__favorites-container container">
            <section className={cn('favorites', { 'favorites--empty': isEmpty })}>
              {!isEmpty ? (
                <>
                  <h1 className="favorites__title">Saved listing</h1>
                  <FavoritesList offers={favorites} />
                </>
              ) : (
                <>
                  <h1 className="visually-hidden">Favorites (empty)</h1>
                  <div className="favorites__status-wrapper">
                    <b className="favorites__status">Nothing yet saved.</b>
                    <p className="favorites__status-description">
                      Save properties to narrow down search or plan your future
                      trips.
                    </p>
                  </div>
                </>
              )}
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}
