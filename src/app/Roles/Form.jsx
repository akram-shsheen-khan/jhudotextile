"use client"
import { Form as AntForm, Input, Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { privateAPI } from '@/config/constants';

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

const Form = ({ getRoles, onEdit, setOnEdit }) => {
  const [form] = AntForm.useForm();
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      form.setFieldsValue({
        name: onEdit.name,
      });
    }
  }, [onEdit, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      
      console.log("🚀 ~ file: Form.jsx:21 ~ Form ~ onEdit:", onEdit)
      if (onEdit) {
        await privateAPI
          .put('/roles', {
            id: onEdit.id,
            name: values.name,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      } else {
        await privateAPI
          .post('/roles', {
            name: values.name,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      }

      form.resetFields();
      setOnEdit(null);
      getRoles();
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
      toast.warn('Please fill all fields!');
    }
  };

  return (
    <FormContainer form={form} onFinish={handleSubmit} style={{ width: '100%' }}>
      <div>
        <AntForm.Item name="name" label="Name">
          <Input />
        </AntForm.Item>
      </div>

      <AntForm.Item>
        <Button type="primary" htmlType="submit">
          {!onEdit ? 'SAVE' : 'UPDATE'}
        </Button>
      </AntForm.Item>
    </FormContainer>
  );
};

export default Form;