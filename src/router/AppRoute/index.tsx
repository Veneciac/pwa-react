import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { HomeScreen } from "screens";
import { history } from "store";

const routes = [
  {
    path: "",
    component: HomeScreen,
  },
];

const AppRouter = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map((route) => {
          const { path, component } = route;
          return <Route key={path} path={path} component={component} />;
        })}
        <Redirect from="*" to="/" />
      </Switch>
    </ConnectedRouter>
  );
};

export default AppRouter;
