import { Route } from "react-router-dom";
import DocumentTitle from "react-document-title";
import assign from "object-assign";

export function createRoutes(app, routeConfig) {
  return routeConfig(app).map((item) => {
    return createRoute(app, () => item);
  });
}

export function createRoute(app, routeConfig) {
  const { path, component, title, ...otherProps } =
    routeConfig(app);
  const Comp = component;
  const routeProps = assign(
    {
      key: path,
      render: (props) => (
        <DocumentTitle title={title}>
          <Comp routeConfig={otherProps} {...props}></Comp>
        </DocumentTitle>
      ),
    },
    path && {
      path: path,
    }
  );
  return <Route {...routeProps}></Route>;
}
