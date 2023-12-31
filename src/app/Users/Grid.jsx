"use client";
import { Table, Space, Button, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { privateAPI } from "@/config/constants";
import { toast } from "react-toastify";

const Grid = ({ users, setOnEdit, getUsers, roles }) => {
  console.log("🚀 ~ file: Grid.jsx:7 ~ Grid ~ users:", users);
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    try {
      const response = await privateAPI.patch("/users", { id });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        getUsers();
        toast.success(response.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete user.");
    }

    setOnEdit(null);
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Password",
      dataIndex: "normalPassword",
      key: "normalPassword",
    },
    {
      title: "Role",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          {record.name !== "admin" && (
            <>
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => handleEdit(record)}
              >
                Edit
              </Button>
              <Popconfirm
                title="Are you sure to delete this user?"
                onConfirm={() => handleDelete(record._id)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="danger" icon={<DeleteOutlined />}>
                  Delete
                </Button>
              </Popconfirm>
            </>
          )}
        </Space>
      ),
    },
  ];

  return (
    <Table
      dataSource={users?.map((user) => {
        return {
          ...user,
          name: roles.find((role) => user?.role == role?.id)?.name,
        };
      })}
      columns={columns}
    />
  );
};

export default Grid;
