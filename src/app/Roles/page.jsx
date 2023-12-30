"use client"
import styled from "styled-components";
import Form from "./Form";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { privateAPI} from "../../config/constants";
import withAuth from "@/utils/withAuth";
const Container = styled.div`
  width: 40rem;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [roles, setRoles] = useState([]);
  const [menu, setMenu] = useState([]);
  const [rolesMenus, setRolesMenus] = useState([]);
  const [subMenu, setSubMenu] = useState([]);
  const [onEdit, setOnEdit]  = useState(null);

  const getRoles = async () => {
    try {
      const roles = await privateAPI.get("/roles");
      setRoles(roles.data);
    } catch (error) {
      toast.error(error);
    }
  };
  const getAllMenusAndSub = async () => {
    try {

      const menu = await privateAPI.get("/menu/menusubmenu");
      setMenu(menu.data.menu);
      setSubMenu(menu.data.submenu);

    } catch (error) {
      toast.error(error);
    } 
  };
  const getMenusAndSubAllRoles = async () => {
    try {
      const menu = await privateAPI.get("/menu/menusubmenurole");
      console.log("🚀 ~ file: page.jsx:53 ~ getMenusAndSubAllRoles ~ menu:", menu)
      setRolesMenus(menu.data)
    } catch (error) {
      toast.error(error);
    }
  };

const handleFetch = ()=>{
  getRoles();
    getAllMenusAndSub()
    getMenusAndSubAllRoles()
}
  useEffect(() => {
    handleFetch()
  }, []);

  return (
    <>
      <Container>
        <Title>Roles</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getRoles={getRoles}/>
        <Grid setOnEdit={setOnEdit} users={roles} setUsers={setRoles} getUsers={getRoles} menu={menu} subMenu={subMenu} rolesMenus={rolesMenus} setMenu={setMenu} setSubMenu={setSubMenu} setRolesMenus={setRolesMenus}  handleFetch={handleFetch}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default withAuth(App);
