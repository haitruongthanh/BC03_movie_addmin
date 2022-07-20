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
              userService
                .deleteUser(record.taiKhoan)
                .then((res) => {
                  // console.log("res", res);
                  message.success("Xoa thanh cong");
                  // window.location.href = "/"; // Load lại trang để render lại thông tin list user sau khi xóa, nhưng cách này ít khi làm
                  onDelete();
                })
                .catch((err) => {
                  message.error("Xoa that bai");
                  console.log("err", err);
                });
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

/* 
email: "khongco@gmail.com"
hoTen: "Hoang Minh"
maLoaiNguoiDung: "KhachHang"
matKhau: "123456"
soDT: "090909090933"
taiKhoan: "abc123"
 */
