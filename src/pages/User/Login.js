import React, { Component } from "react";
import { Form, Button, Input } from "antd";
import Logo from "Assets/icon.png";
import styles from "./account.scss";

class index extends Component{
  state = {
    user: {
      email: "xx@qq.com"
    }
  }
  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.account}>
        <img src={Logo} alt="my logo" className={styles.logo} />
        <Form className="account-form">
          <Form.Item
            name={["user", "email"]}
            label="邮箱"
            rules={[{ type: "email", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "psw"]}
            label="密码"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="btn">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default index;
