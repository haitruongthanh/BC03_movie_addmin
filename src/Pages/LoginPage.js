import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "./../services/userService";
import { useDispatch } from "react-redux";
import {
  setUserLogin,
  setUserLoginActionService,
} from "../redux/slices/userSlice";
import { localStorageService } from "../services/localStorageService";

const LoginPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    /* userService
      .postDangNhap(values)
      .then((res) => {
        console.log("res", res);
        dispatch(setUserLogin(res.data.content));
        navigate("/");
      })
      .catch((err) => {
        console.log("err", err);
      }); */
    dispatch(setUserLoginActionService(values))
      .unwrap()
      .then((resDispatch) => {
        console.log("resDispatch", resDispatch);
        localStorageService.setUserInfor(resDispatch);
        navigate("/");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container mx-auto pt-20 bg-blue-200 w-screen h-screen flex items-center justify-center">
      <div className="w-80 mx-auto">
        <Form
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tài Khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 9,
            }}
          >
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
