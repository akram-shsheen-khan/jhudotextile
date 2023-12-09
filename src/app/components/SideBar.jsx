'use client'
import {  useRouter } from "next/navigation.js";
import NavLink from "next/link";

//import * as FaIcons from "react-icons/fa";
//import * as BiIcons from "react-icons/bi";
//import * as BsIcons from "react-icons/bs";
//import * as AiIcons from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "antd";
import { toast } from "react-toastify";
import { privateAPI, attachToken } from "../../config/constants";
import SidebarMenu from "./SidebarMenu.jsx";
import { getLocalStorege } from "@/utils/globalFunctions";

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter();
  const [menu, setMenu] = useState([]);
  console.log("🚀 ~ file: Sadebar.jsx:207 ~ SideBar ~ menu:", menu);
  const [subMenu, setSubMenuu] = useState([]);
  const getMenu = async () => {
    attachToken();
    await privateAPI
      .post("/menu",{role:getLocalStorege('role')})
      .then(({ data }) => {
        console.log(data);
        setMenu(data.menu);
        setSubMenuu(data.submenu);
      })
      .catch(({ data }) => toast.error(data));
  };
  useEffect(() => {
    getMenu();
  }, []);

  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "80%",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  // const getIcon = (iconName='FaBar')=>{
  //   let Icon = FaIcons
  //   if(iconName.slice(0,2).toLowerCase == 'fa'){
  //     Icon = FaIcons[iconName]
  //   }else if(iconName.slice(0,2).toLowerCase == 'bi'){
  //     Icon = BiIcons[iconName]
  //   }else if(iconName.slice(0,2).toLowerCase == 'bs'){
  //     Icon = BsIcons[iconName]
  //   }else if(iconName.slice(0,2).toLowerCase == 'cg'){
  //     Icon = AiIcons[iconName]
  //   }
  //   console.log(Icon)
  // }
  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px": "25px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
          <div className="bars" >
              <FaBars onClick={toggle} />
            </div>  
   
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
           
          </div>
        
          <section className="routes">
            {menu?.map((route, index) => {
              if (
                subMenu?.some((subRoute) => route.menu_id == subRoute.menu_id)
              ) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    subMenu={subMenu?.filter(
                      (subRoute) => route?.menu_id == subRoute?.menu_id
                    )}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              } else {
                return (
                  <NavLink
                  href={route?.menu_url || '#'}
                    key={index}
                  >
                    <div className="icon"></div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.menu_name}
                        </motion.div>
                    )} 
                    </AnimatePresence>
                  </NavLink>
                );
              }
            })}
           
          </section>
        </motion.div>
        <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
        <header style={{padding:"0 .5rem",width:"100%",height:"5rem",background:"rgb(0, 7, 61)",display:'flex',justifyContent:"space-between",alignItems:"center"}}> 
        <div className="herder-bars" style={{color:'white'}}>
              <FaBars onClick={toggle} />
            </div>  
            <h1
            style={{color:"white",fontSize:"1.5rem"}}
                 
                >
                  Akram Shaheen
                </h1>
            <Button
              onClick={() => {
                typeof window != undefined? window.localStorage.clear():false;
                navigate.push("/login");
              }}
            >
              Logout
            </Button></header>
        <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default SideBar;
