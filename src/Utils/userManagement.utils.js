import { Button, message, Space, Tag } from "antd";
import { userService } from "./../services/userService";
export const headerTableUser = [
  {
    title: "Ho Tên",
    dataIndex: "hoTen",
    key: "hoTen",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tài Khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
    /* render: (text) => <a>{text}</a>, */
  },
  {
    title: "Mật khẩu",
    dataIndex: "matKhau",
    key: "matKhau",
    /* render: (text) => <a>{text}</a>, */
  },

  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    /* render: (text) => <a>{text}</a>, */
  },
  {
    title: "Số điện thoại",
    dataIndex: "soDT",
    key: "soDT",
    /* render: (text) => <a>{text}</a>, */
  },
  {
    title: "Mã loại người dùng",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
    render: (dataIndex) => (
      <>
        {dataIndex === "KhachHang" ? (
          <Tag color="lime">Khách hàng</Tag>
        ) : (
          <Tag color="orange">Quản trị</Tag>
        )}
      </>
    ),
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
    render: ({ onDelete, onEdit }, record) => {
      return (
        <Space size="middle">
          <Button type="primary" style={{ color: "gray" }}>
            {" "}
            Edit
          </Button>
          <Button
            type="primary"
            style={{ color: "white" }}
            danger
            onClick={() => {
              onDelete();
            }}
          >
            {" "}
            Delete
          </Button>
        </Space>
      );
    },
  },
];
