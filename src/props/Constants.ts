import leaflet from 'leaflet';

export const defaultCustomIcon = leaflet.icon({
  iconUrl: 'public/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 20],
});

export const currentCustomIcon = leaflet.icon({
  iconUrl: 'public/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 20],
});

export const DEFAULT_MAP_ZOOM = 12;

export const AppRoutes = {
  Main: '/',
  Login: '/login',
  Offer: '/offer/:offerId',
  Favorites: '/favorites',
  NotFound: '/*'
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ApiRoutes {
  Offers = '/six-cities/offers',
  Offer = '/six-cities/offers/{offerId}',
  OffersNearby = '/six-cities/offers/{offerId}/nearby',
  Favorite = '/six-cities/favorite',
  FavoriteStatus = '/six-cities/favorite/{offerId}/{status}',
  Comments = '/six-cities/comments/{offerId}',
  Login = '/six-cities/login',
  Logout = '/six-cities/logout',
}
