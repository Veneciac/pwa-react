import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { LoginScreen } from "screens";
import { history } from "store";
import AppRouter from "./AppRoute";
import PrivateRoute from "./PrivateRoute";

const routes = [
  {
    path: "/login",
    component: LoginScreen,
  },
];

const Router = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map((route) => {
          const { path, component } = route;
          return <Route key={path} path={path} component={component} />;
        })}
        <PrivateRoute path="/" component={AppRouter} />
        <Redirect from="*" to="/" />
      </Switch>
    </ConnectedRouter>
  );
};

export default Router;
