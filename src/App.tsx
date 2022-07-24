import { Route, Switch, Redirect } from 'react-router-dom';
import routes from 'routes';

import Layout from 'components/Layout';
import PrivateRoute from 'components/PrivateRoute';

import ErrorPage from 'components/ErrorPage';

function App() {
  return (
    <Layout>
      <Switch>
        {routes.map(({ children, id }) =>
          children.map(route => (
            <PrivateRoute
              {...route}
              path={route.rootURL ? '/' : `/${id}${route.path}`}
              key={route.path}
            />
          ))
        )}
        <Route path='/error' component={ErrorPage} />
        {/* <Route path='/404' component={NotFound} /> */}
        {/* <Redirect from='*' to='/404' /> */}
      </Switch>
      {/* <Modal /> */}
      {/* <Loading /> */}
    </Layout>
  );
}

export default App;
