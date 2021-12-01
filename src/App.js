import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import AppBar from './components/AppBar';
import PreLoader from './components/PreLoader';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => {
  return (
    <div className={styles.App}>
      <AppBar />
      <Suspense fallback={<PreLoader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
