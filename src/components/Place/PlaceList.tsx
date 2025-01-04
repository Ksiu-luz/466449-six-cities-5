import { Nullable } from 'vitest';
import { Offer } from '../../props/Offers.ts';
import { CardTypes } from './PlaceCard.tsx';
import { MemoPlaceCard } from './PlaceCard.tsx';

type PlaceListProps = {
  offers: Offer[];
  cardType: CardTypes;
  onItemHover?: (id: Nullable<string>) => void;
}

export function PlaceList({offers, cardType, onItemHover}: PlaceListProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <MemoPlaceCard
          offer={offer}
          cardType={cardType}
          onHover={(id) => onItemHover?.call(null, id)}
        />
      ))}
    </>
  );
}
