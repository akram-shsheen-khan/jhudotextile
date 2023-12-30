"use client"
import styled from "styled-components";
import Form from "./Form";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { publicAPI } from "@/config/constants";
import withAuth from "@/utils/withAuth";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function Page() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await publicAPI.get("/users");
      const roles = await publicAPI.get("/roles");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      setRoles(roles.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>Users</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} roles={roles} />
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} getUsers={getUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default withAuth(Page);
