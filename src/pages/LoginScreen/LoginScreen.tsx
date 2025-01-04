import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../props/Constants';
import { useEffect } from 'react';
import { useAppSelector } from '../../store/Hooks';
import { LoginForm } from './LoginForm';

export function LoginScreen(): React.JSX.Element {
  const authStatus = useAppSelector((state) => state.auth.authorizationStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoutes.Main);
    }
  }, [authStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoutes.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
