import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Layout } from "antd";
import NavBar from './NavBar';

//引入路由相关组件
import {Switch, Route, Redirect} from 'dva/router';
import Home from "./Home";
import About from "./About";
import Admin from "./Admin";
import Menus from "./Menus";
import Login from "./User/Login";
import Register from "./User/Register";



const {Header, Content} = Layout;

function IndexPage(props) {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavBar {...props} />
      </Header>
      <Content className={styles.content}>
        {/* 一级路由 */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/menus" component={Menus} />
          <Route path="/admin" component={Admin} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* 重定向 */}
          <Redirect to="/home" />
        </Switch>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
