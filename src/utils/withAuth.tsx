"use client";
import {  redirect } from "next/navigation";
import { useSelector } from "react-redux";
import SideBar from "../app/components/SideBar";
import { useEffect, useLayoutEffect } from "react";
import { getToken } from "./globalFunctions";
const withAuth = (Component: any) => {
  return function Auth (props: any) {
    console.log("🚀 ~ file: withAuth.tsx:7 ~ Auth ~ props:", props);
    // const pathName = usePathname();
    // console.log("🚀 ~ file: withAuth.tsx:8 ~ Auth ~ pathName:", pathName);

    // Login data added to props via redux-store (or use react context for example)
    // const token: any = true
    const token: any = getToken()
    console.log("🚀 ~ file: withAuth.tsx:14 ~ Auth ~ token:", token);
    //alo
    // If user is not logged in, return login component
    useLayoutEffect(() => {
      if (!token) {
        redirect("/login");
      }
      // if (token && pathName == "/login") {
      //   window.location.reload();
      // }
    }, [token]);

    // if(!token){
    //   return null
    // }

    // If user is logged in, return original component
    return (
      <SideBar>
        <Component {...props} />
      </SideBar>
    );
  };
};

export default withAuth;
