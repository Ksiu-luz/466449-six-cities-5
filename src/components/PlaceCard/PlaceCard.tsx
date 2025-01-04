import {Link} from 'react-router-dom';
import { Offer } from '../../props/Offers';
import cn from 'classnames';
import { Nullable } from 'vitest';
import { CardBookmarkButton } from '../BookmarkButton';
import { memo } from 'react';

export type CardTypes = 'cities' | 'favorites' | 'near-places';

export type PlaceCardProps = {
  offer: Offer;
  cardType: CardTypes;
  onHover?: (id: Nullable<string>) => void;
}

export function PlaceCard({
  offer,
  cardType,
  onHover,
}: PlaceCardProps): JSX.Element {
  return (
    <article
      className={cn('place-card', `${cardType}__card`)}
      onMouseOver={() => onHover?.call(null, offer.id)}
      onMouseLeave={() => onHover?.call(null, null)}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={cn('place-card__image-wrapper', `${cardType}__image-wrapper`)}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={cardType === 'favorites' ? 150 : 260}
            height={cardType === 'favorites' ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <CardBookmarkButton offerId={offer.id} isFavorite={offer.isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.city.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export const MemoPlaceCard = memo(PlaceCard);
