import React from 'react';
import { Router, Switch } from 'dva/router';

import SubRoutes from "./utils/SubRoutes";

// import IndexPage from './pages/IndexPage';
// import Home from './pages/Home';
// import About from "./pages/About";
// import Admin from "./pages/Admin";
// import Menus from "./pages/Menus";
// import Login from "./pages/User/Login";
// import Register from "./pages/User/Register";

//私有路由开关
const isAuthority = true;

const RouteConfig = [
  {
    path: "/",
    component: () => import("./pages/IndexPage"),
    model: [],
    routes: [
      {
        path: "/home",
        component: () => import("./pages/Home"),
        model: [import("./models/home")],
        redirect: true,
        isAuthority,
      },
      {
        path: "/menus",
        component: () => import("./pages/Menus"),
        model: [],
        isAuthority,
      },
      {
        path: "/admin",
        component: () => import("./pages/Admin"),
        model: [],
        isAuthority,
      },
      {
        path: "/about",
        component: () => import("./pages/About"),
        model: [],
        routes: [
          {
            path: "/about/history",
            component: () => import("./pages/About/History"),
            model: [],
          },
          {
            path: "/about/contact",
            component: () => import("./pages/About/Contact"),
            model: [],
            routes: [
              {
                path: "/about/contact/phone",
                model: [],
                component: () => import("./pages/About/Phone"),
              },
              {
                path: "/about/contact/address",
                model: [],
                component: () => import("./pages/About/Address"),
              },
            ],
          },
          {
            path: "/about/orderingguide",
            component: () => import("./pages/About/OrderingGuide"),
            model: [],
          },
          {
            path: "/about/delivery",
            component: () => import("./pages/About/Delivery"),
            model: [],
          },
        ],
        isAuthority,
      },
      {
        path: "/login",
        component: () => import("./pages/User/Login"),
        model: [],
      },
      {
        path: "/register",
        component: () => import("./pages/User/Register"),
        model: [],
      },
    ],
  },
];

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" component={IndexPage} /> */}
        {
          RouteConfig.map((route, i) => (
            <SubRoutes key={i} {...route} app={app} />
          ))
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
