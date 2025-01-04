import { useMemo } from 'react';
import { Offer } from '../../props/Offers';
import LocationHeader from '../../components/LocationHeader';
import { PlaceList } from '../../components/PlaceCard/PlaceList';

type FavoritesListProps = {
  offers: Offer[];
};

export function FavoritesList({ offers }: FavoritesListProps) {
  const cities = useMemo(
    () => Array.from(new Set(offers.map((x) => x.city.name).toSorted())),
    [offers]
  );

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <LocationHeader title={city} selected />
          <div className="favorites__places">
            <PlaceList
              offers={offers.filter((x) => x.city.name === city)}
              cardType='favorites'
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
