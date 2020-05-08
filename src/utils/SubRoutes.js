import React from 'react';
import { Route, Redirect } from "dva/router";
import { connect } from "dva";
import NoMatch from "../components/NoMatch";
import dynamic from "dva/dynamic";

// const SubRoutes = (route) => {
//   return (
//     <Route render={props => <route.component {...props} routes={route.routes} />} />
//   );
// }

//解决动态组件加载问题
const dynamicCom = (app, models, component, routes, isAuthority, userInfo) =>
  dynamic({
    app,
    models: () => models,
    component: () =>
      component().then((res) => {
        //isAuthority
        // console.log(11,isAuthority);
        if (isAuthority) {
          //判断userInfo.id是否有内容
          if(!userInfo.id) {
            return () => <Redirect to="/login" />
          }
        }
        const Component = res.default || res;
        return (props) => <Component app={app} routes={routes} {...props} />;
      }),
  });

function SubRoutes({ routes, component, app, model, isAuthority, userInfo }) {
  // console.log(isAuthority);
  // console.log(userInfo);
  return (
    <Route
      component={dynamicCom(
        app,
        model,
        component,
        routes,
        isAuthority,
        userInfo
      )}
    />
  );
};

// 重定向封装组件
export function RedirectRoute({ routes, from, exact }) {
  // console.log(222, routes);
  const routeR = routes.filter(item => {
    return item.redirect;
  });

  const to = routeR.length ? routeR[0].path : routes[0].path;
  return <Redirect exact={exact} from={from} to={to} />;
}

export function NoMatchRoute({status = 404}) {
  return <Route render={(props) => <NoMatch {...props} status={status} />} />;
}


//链接model
export default connect(({global}) => ({
  userInfo: global.userInfo
}))(SubRoutes);
