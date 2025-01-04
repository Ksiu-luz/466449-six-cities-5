import React from 'react';
import { Layout } from '../../components/Layout/Layout.tsx';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../props/Constants.ts';
import styles from './NotFound.module.css';

export function NotFoundScreen(): React.JSX.Element {
  return (
    <Layout>
      <main className={styles.main__not_found}>
        <h1>404 Not Found</h1>
        <Link className='button form__submit' to={AppRoutes.Main}>Go to main page</Link>
      </main>
    </Layout>
  );
}
