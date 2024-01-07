"use client";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import SideBar from "../app/components/SideBar";
import { useLayoutEffect } from "react";
import { getToken } from "./globalFunctions";
const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    console.log("🚀 ~ file: withAuth.tsx:7 ~ Auth ~ props:", props);
    const Navigate = useRouter();
    const pathName = usePathname();
    console.log("🚀 ~ file: withAuth.tsx:8 ~ Auth ~ pathName:", pathName);

    // Login data added to props via redux-store (or use react context for example)
    // const token: any = useSelector(
    //   (state: any) => state.authReducer.value?.token
    // );
    const token: any = getToken()
    console.log("🚀 ~ file: withAuth.tsx:14 ~ Auth ~ token:", token);
    //alo
    // If user is not logged in, return login component
    useLayoutEffect(() => {
      if (!token) {
        Navigate.push("/login");
      }
    }, []);
    
    if (!token) {
      return null
    }
    
    if(token){
      return (
        <SideBar>
          <Component {...props} />
        </SideBar>
      );
    }
    // if (!token) {
    // }
    // If user is logged in, return original component
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
