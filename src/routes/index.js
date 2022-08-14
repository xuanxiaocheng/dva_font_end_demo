import { createRoutes } from "../utils/core";
import BasicLayout from "../components/BasicLayout";
import IndexPage from "./IndexPage";

const routesConfig = (app) => [
  {
    path: "/",
    title: "任务总览",
    component: BasicLayout,
    childRoutes: [...IndexPage(app)],
  },
];
export default (app) => createRoutes(app, routesConfig);
