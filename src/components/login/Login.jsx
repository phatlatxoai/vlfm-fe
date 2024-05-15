import { Button, Form, Input } from "antd";
import React from "react";
import useLoginSubmit from "../../hook/useLoginSubmit";
import ImageLight from "../../assets/img/login-office.jpeg";
const Login = () => {
  const { onSubmit, form } = useLoginSubmit();

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 ">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl ">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            {/* <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            /> */}
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              // src={ImageDark}
              src={ImageLight}

              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-6 text-2xl font-semibold  text-black">
                Login
              </h1>
              <Form form={form} onFinish={onSubmit}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên người dùng của bạn!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập mật khẩu",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="mt-4 h-12 w-full"
                  to="/dashboard"
                >
                  LoginTitle
                </Button>
                <hr className="my-10" />
                {/* <button
                disabled
                className="text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2 md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2"
              >
                <ImFacebook className="w-4 h-4 mr-2" />{" "}
                <span className="ml-2"> {t("LoginWithFacebook")} </span>
              </button>
              <button
                disabled
                className="text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2  md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full"
              >
                <ImGoogle className="w-4 h-4 mr-2" />{" "}
                <span className="ml-2">{t("LoginWithGoogle")}</span>
              </button> */}
              </Form>

              {/* <p className="mt-4">
              <Link
                className="text-sm font-medium text-primary dark:text-red-400 hover:underline"
                to="/forgot-password"
              >
                ForgotPassword
              </Link>
            </p> */}
              {/* <p className="mt-1">
              <Link
                className="text-sm font-medium text-primary dark:text-red-400 hover:underline"
                to="/signup"
              >
                {t("CreateAccountTitle")}
              </Link>
            </p> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;
