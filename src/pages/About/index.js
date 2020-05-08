import React, { Component } from 'react';
import {Switch} from 'dva/router';
import SubRoutes, { RedirectRoute } from "../../utils/SubRoutes";
import {Tabs} from 'antd';

import styles from './index.scss';

const {TabPane} = Tabs;
class index extends Component {
  handelChangeTab = (key) => {
    //点击切换路由
    // console.log(key)
    // window.location.href = "/#" + key;
    if(this.props.location.pathname !== key) {
      this.props.history.push(key);
    }
  }
  render() {
    const { routes, app } = this.props;
    const { pathname } = this.props.location;
    const activeKey = pathname.split("/").slice(0, 3).join("/");
    console.log(333, activeKey);
    return (
      <div className={styles.about}>
        <Tabs
          className={styles.tabs}
          tabPosition={"left"}
          activeKey={activeKey}
          onChange={this.handelChangeTab}
        >
          <TabPane tab="历史订餐" key="/about/history" />
          <TabPane tab="联系我们" key="/about/contact" />
          <TabPane tab="点餐文档" key="/about/orderingguide" />
          <TabPane tab="快递信息" key="/about/delivery" />
        </Tabs>
        <div className={styles.routes}>
          {/* 二级路由 */}
          <Switch>
            {routes.map((route, i) => (
              <SubRoutes key={i} {...route} app={app} />
            ))}
            <RedirectRoute exact={true} from={"/about"} routes={routes} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default index;
