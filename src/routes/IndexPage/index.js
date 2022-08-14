import { createRoute } from "../../utils/core";
import dynamic from "dva/dynamic";

const IndexPage = (app) => ({
  path: "/indexPage",
  title: "首页",
  component: dynamic({
    app,
    models: () => [import("./model/IndexPage")],
    component: () => import("./components/IndexPage"),
  }),
});

export default (app) => [createRoute(app, IndexPage)];
