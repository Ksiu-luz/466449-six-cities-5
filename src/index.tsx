import ReactDOM from 'react-dom/client';
import { App } from './components/App.tsx';
import { store } from './store/Index';
import {
  fetchOffersAction,
  checkAuthAction,
  fetchFavoritesAction
} from './store/ApiActions';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

store.dispatch(fetchOffersAction());
await store.dispatch(checkAuthAction());
await store.dispatch(fetchFavoritesAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
