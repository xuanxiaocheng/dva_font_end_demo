import React from "react";
import { Router, Switch } from "react-router-dom";
import routeConfig from "./routes";

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch children={routeConfig(app)}></Switch>
    </Router>
  );
}

export default RouterConfig;
