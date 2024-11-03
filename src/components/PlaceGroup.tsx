import { PlaceMock } from '../props/PlaceMocks';
import { PlaceList } from './PlaceList';
import { Link } from 'react-router-dom';
import { CardTypes } from '../props/PlaceCardProps';

export interface PlaceGroupProps {
  cityName: string;
  offers: PlaceMock[];
  cardType: CardTypes;
}

export function PlaceGroup({
  cityName,
  offers,
  cardType,
}: PlaceGroupProps): React.JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={'#'}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <PlaceList offers={offers} cardType={cardType} />
      </div>
    </li>
  );
}