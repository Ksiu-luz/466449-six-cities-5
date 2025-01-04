import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Offer } from '../../props/Offers';
import { Review } from '../../props/Review';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { fetchFullOffer } from '../../store/ApiActions';

type OfferScreenState = {
  offer: Offer | undefined;
  reviews: Review[];
  nearbyOffers: Offer[];
  isError: boolean;
  isLoading: boolean;
};

export function useOfferScreen(): OfferScreenState {
  const { offerId } = useParams<{ offerId?: string }>();
  const dispatch = useAppDispatch();
  const currentOfferState = useAppSelector((state) => state.currentOffer);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (offerId === undefined) {
      setError(true);
      return;
    }
    dispatch(fetchFullOffer(offerId));
  }, [dispatch, offerId]);

  return { ...currentOfferState, isError: currentOfferState.isError || isError};
}
