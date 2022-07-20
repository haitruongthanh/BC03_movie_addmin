import React, { useEffect, useState } from "react";
import { message, Space, Table, Tag } from "antd";
import { userService } from "./../services/userService";
import TableUsers from "./TableUsers/TableUsers";
import { useWindowSize } from "../Hook/useWindowSize";
import SpinnerComponent from "../Components/SpinnerComponent/SpinnerComponent";
import { useDispatch, useSelector } from "react-redux";
import { setSpinnerLoading } from "../redux/slices/spinnerSlice";

export default function UserManagePage() {
  const [userList, setUserList] = useState([]);
  const window = useWindowSize();
  let dispatch = useDispatch();

  let isSpinnerLoading = useSelector((state) => {
    return state.spinnerSlice.isSpinnerOpen;
  });
  console.log(isSpinnerLoading);

  // console.log("window", window);

  //mục đích để gọi lại hàm sau khi xóa user để render lại list ra màn hình
  let fetchUserList = () => {
    dispatch(setSpinnerLoading(true));
    userService
      .getUserList()
      .then((res) => {
        // console.log("res", res);
        dispatch(setSpinnerLoading(false));
        let dataRaw = res.data.content.map((user, i) => {
          return {
            ...user,
            action: {
              onDelete: () => {
                userService
                  .deleteUser(user.taiKhoan)
                  .then((res) => {
                    dispatch(setSpinnerLoading(false));
                    message.success("Xoa thanh cong");
                    fetchUserList();
                  })
                  .catch((err) => {
                    message.error("Xoa that bai");
                  });
              },
              onEdit: () => {
                fetchUserList();
              },
            },
            key: i,
          };
        });
        setUserList(dataRaw);
      })
      .catch((err) => {
        dispatch(setSpinnerLoading(false));
        console.log("err", err);
      });
  };

  useEffect(() => {
    fetchUserList();
    // dispatch(setSpinnerLoading(true));
  }, []);

  return (
    <div className="">
      {/* {window.width > 992 ? (
        <TableUsers listUser={userList} />
      ) : (
        "Man hinh nho hon table"
      )} */}
      {/* {isSpinnerLoading && <SpinnerComponent />} */}
      <div className="container px-15 mx-auto"></div>
      <TableUsers listUser={userList} />
    </div>
  );
}
