import { AppRoutes, AuthorizationStatus } from '../props/Constants';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/Hooks';
import { logoutAction } from '../store/ApiActions';

interface LayoutProps {
  children: React.JSX.Element;
  showFooter?: boolean;
}

export function Layout({
  children,
  showFooter,
}: LayoutProps): React.JSX.Element {

  const authStatus = useAppSelector((state) => state.auth.authorizationStatus);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const favoriteCount = useAppSelector(
    (state) => state.offers.favorites.length
  );

  const logOut = () => {
    dispatch(logoutAction());
    navigate(AppRoutes.Main);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoutes.Main}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authStatus === AuthorizationStatus.Auth && user ? (
                  <>
                    <li className="header__nav-item user">
                      <Link
                        className="header__nav-link header__nav-link--profile"
                        to={AppRoutes.Favorites}
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">
                          {user.email}
                        </span>
                        <span className="header__favorite-count">{favoriteCount}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        to={AppRoutes.Main}
                        onClick={logOut}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoutes.Login}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {children}
      {showFooter && (
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoutes.Main}>
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width="64"
              height="33"
            />
          </Link>
        </footer>
      )}
    </>
  );
}
