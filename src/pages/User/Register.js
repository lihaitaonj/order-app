import React, { Component } from "react";
import {Form, Button, Input} from 'antd';
import Logo from 'Assets/icon.png';
import styles from './account.scss';
class index extends Component {
  render() {
    return (
      <div className={styles.account}>
        <img src={Logo} alt="my logo" className={styles.logo} />
        <Form className="account-form">
          <Form.Item label="邮箱">
            <Input />
          </Form.Item>
          <Form.Item label="密码">
            <Input type="password" />
          </Form.Item>
          <Form.Item label="确认密码">
            <Input type="password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="btn">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default index;
