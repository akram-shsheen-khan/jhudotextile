"use client";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Form as AntForm, Input, Select, Button } from 'antd';
import { toast } from "react-toastify";
import { privateAPI } from "@/config/constants";

const { Option } = Select;

const FormContainer = styled(AntForm)`
  display: flex;
  align-items: flex-end;
  gap: 30px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const Form = ({ getUsers, onEdit, setOnEdit, roles }) => {
  const [form] = AntForm.useForm();
  const [role, setRole] = React.useState("dye");

  const handleChange = (value) => {
    setRole(value);
  };

  useEffect(() => {
    if (onEdit) {
      form.setFieldsValue({
        id:onEdit._id,
        username: onEdit.username,
        normalPassword: onEdit.normalPassword,
        role: onEdit.role,
      });
      setRole(onEdit.role);
    }
  }, [onEdit, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (onEdit) {
        await privateAPI
          .put("/users", {
            id: onEdit._id,
            ...values,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      } else {
        await privateAPI
          .post("/users", values)
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      }

      form.resetFields();
      setOnEdit(null);
      getUsers();
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
      toast.warn("Please fill all fields!");
    }
  };

  return (
    <FormContainer form={form} onFinish={handleSubmit}>
      <AntForm.Item name="username" label="Name">
        <Input />
      </AntForm.Item>
      <AntForm.Item name="normalPassword" label="Password">
        <Input.TextArea />
      </AntForm.Item>
      <AntForm.Item name="role" label="Role">
        <Select value={role} onChange={handleChange}>
          {roles?.map((rol) => (
            <Option key={rol.id} value={rol.id}>
              {rol.name}
            </Option>
          ))}
        </Select>
      </AntForm.Item>
      <AntForm.Item>
        <Button type="primary" htmlType="submit">
          {!onEdit ? "SAVE" : "UPDATE"}
        </Button>
      </AntForm.Item>
    </FormContainer>
  );
};

export default Form;