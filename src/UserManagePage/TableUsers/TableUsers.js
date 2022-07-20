import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { userService } from "./../../services/userService";
import { headerTableUser } from "../../Utils/userManagement.utils";

export default function TableUsers({ listUser }) {
  // console.log("listUser", listUser);
  return (
    <div className="container px-15 mx-auto">
      <Table columns={headerTableUser} dataSource={listUser} />
    </div>
  );
}
