import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Dashboard from '../components/Dashboard';
import Register from '../components/Register';
import Success from '../components/Success';
import Admin from '../components/Admin';
import Customers from '../components/Customers';
import { RootState } from '../reducers';
import { connect } from 'react-redux';

const mapState = (state: RootState) => ({
  token: state.auth.token,
});

type AppRouterProps = ReturnType<typeof mapState>;

export const history = createBrowserHistory();

const AppRouter = ({ token }: AppRouterProps) => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/register" component={Register} />
      <Route path="/success" component={Success} />
      <Route path="/admin" component={Admin} />
      <Route path="/customers">
        {token === '' ? <Redirect to="/admin" /> : <Customers />}
      </Route>
    </Switch>
  </Router>
);

export default connect(mapState)(AppRouter);
