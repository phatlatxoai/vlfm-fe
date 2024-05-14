import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { PageContainer, ProTable } from "@ant-design/pro-components";
import useLoginSubmit from "../hook/useLoginSubmit";

const Login = () => {
  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch("https://localhost:7247/api/User/Login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       // Xử lý sau khi đăng nhập thành công (ví dụ: lưu token vào local storage)
  //       console.log("Đăng nhập thành công!", data);
  //     } else {
  //       console.error("Đăng nhập thất bại!");
  //     }
  //   } catch (error) {
  //     console.error("Lỗi đăng nhập:", error);
  //   }
  // };
  const { form, onSubmit } = useLoginSubmit();

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="w-96 h-96 rounded-xl border border-green-300 shadow-xl">
        <Form
          className="w-full h-full p-8"
          form={form}
          onFinish={onSubmit}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <div className="â">
            <Form.Item
              label="Username"
              className="w-full"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>
          
          <div>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
