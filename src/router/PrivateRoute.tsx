/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { localStorage } from "helpers";

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  let redirectPath: string = "/login";
  const token = localStorage.getTokenUser();

  if (!token) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};

export default PrivateRoute;
