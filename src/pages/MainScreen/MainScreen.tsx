import React from 'react';
import { Layout } from '../../components/Layout.tsx';
import Tabs from '../../components/Tabs/Tabs.tsx';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import cn from 'classnames';
import { OfferList, EmptyOfferList } from './OffersList';
import { cityOffersSelector } from '../../store/Selectors.ts';
import { changeCity } from '../../store/slices/CitySlice';


export function MainScreen(): React.JSX.Element {
  const city = useAppSelector((state) => state.city.city);
  const offers = useAppSelector(cityOffersSelector);
  const isLoading = useAppSelector((state) => state.offers.offersLoadingStatus);
  const dispatch = useAppDispatch();
  const isEmpty = offers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Layout>
        <main className={cn('page__main', 'page__main--index', {
          'page__main--index-empty': isEmpty,
        })}
        >
          <h1 className="visually-hidden">Cities</h1>
          <Tabs
            selectedCity={city}
            onClick={(c) => dispatch(changeCity(c))}
          />
          <div className="cities">
            {isLoading ? (
              <div className={'cities__places-loading'} />
            ) : (
              <div
                className={cn('cities__places-container', 'container', {
                  'cities__places-container--empty': offers.length === 0,
                })}
              >
                {!isEmpty ? (
                  <OfferList offers={offers} city={offers[0].city} />
                ) : (
                  <EmptyOfferList city={city} />
                )}
              </div>
            )}
          </div>
        </main>
      </Layout>
    </div>
  );
}
