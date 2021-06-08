import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import "./PasswordChange.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const PasswordChange = (props) => {
  console.log(props);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form2">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          // label="Username"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input className="input2" placeholder="New password" />
        </Form.Item>

        <Form.Item
          // label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password again!",
            },
          ]}
        >
          <Input.Password className="input2" placeholder="Confirm password" />
        </Form.Item>

        <Button
          className="second-ok-btn"
          type="primary"
          htmlType="button"
          onClick={() => {
            props.pageFunction();
          }}
        >
          Ok
        </Button>

        <Form.Item {...tailLayout}></Form.Item>
      </Form>
    </div>
  );
};

export default PasswordChange;
