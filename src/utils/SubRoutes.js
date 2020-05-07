import React from 'react';
import { Route, Redirect } from "dva/router";
import NoMatch from "../components/NoMatch";
import dynamic from "dva/dynamic";

// const SubRoutes = (route) => {
//   return (
//     <Route render={props => <route.component {...props} routes={route.routes} />} />
//   );
// }

//解决动态组件加载问题
const dynamicCom = (app, models, component, routes) =>
  dynamic({
    app,
    models: () => models,
    component: () =>
      component().then((res) => {
        const Component = res.default || res;
        return (props) => <Component app={app} routes={routes} {...props} />;
      }),
  });

export default function SubRoutes({routes, component, app, model}) {
  return <Route component={dynamicCom(app, model, component, routes)} />;
};

export function RedirectRoute({routes, from, exact}) {
  const routeR = routes.filter(item => item.redirect);
  const to = routeR.length ? routeR[0].path : routes[0].path;

  return <Redirect exact={exact} from={from} to={to} />
}

export function NoMatchRoute({status = 404}) {
  return <Route render={(props) => <NoMatch {...props} status={status} />} />;
}
