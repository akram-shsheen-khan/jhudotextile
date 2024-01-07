"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import {publicAPI} from "../../config/constants";
import {useRouter} from 'next/navigation'
import { getLocalStorege, getToken } from "@/utils/globalFunctions";
const SignIn = () => {
  const token: any = getToken()
  const Navigate = useRouter();
  console.log("🚀 ~ file: page.tsx:9 ~ SignIn ~ token:", token)
 
  const [loading, setLoading] = useState(false);
const authLogin = async(payload:any,setLoading:any) => {
      try {
        const res = await publicAPI.post("/auth", payload);
        if (res) {
          console.log("🚀 ~ file: page.tsx:16 ~ return ~ res:", res)
          if (res.data?.blocked) {
            // notification.error({
            //   message: "You are Blocked by the Management",
            //   duration: 3,
            // });
          } else {
            console.log("🚀 ~ file: authActions.js:16 ~ return ~ res.data:", res.data)
            //           username
            // vendorName
            // role
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userName", res.data.username);
            localStorage.setItem("role", res.data.role);
            Navigate.push("/");
            // notification.success({
            //   description: res.data.message,
            //   duration: 2,
            // });
          }
          setLoading(false)
        }
      } catch (err) {
        setLoading(false)
        console.log("🚀 ~ file: page.tsx:37 ~ return ~ err:", err)
        // notification.error({
        //   message: err?.response?.data?.message || "Server Error",
        //   duration: 3,
        // });
      }
    
  };
  const onFinish = async (values:any) => {
    setLoading(true);
    await authLogin(values,setLoading)
  };
  useLayoutEffect(()=>{
    if (token) {
      Navigate.push("/");
  
    }
  },[])


 
  return (
    <>
      <div className="signin">
        <Form
          name="login"
          className="login-form"
          layout="vertical"
          onFinish={onFinish}
        >
          {/* <img src={logo} /> */}
          <h2>Employee Sign In</h2>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "username is Required",
              },
            ]}
            label="User Name"
          >
            <Input autoComplete="off" placeholder="Enter user name..." />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password is Required",
              },
            ]}
            label="Password"
          >
            {/* <Input.Password */}
            <Input type="password" placeholder="Password..." />
          </Form.Item>

          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
          

};

export default SignIn;
