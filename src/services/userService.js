import axios from "axios";
import { BASE_URL, httpService, TOKEN_CYBERSOFT } from "./configURL";

export const userService = {
  postDangNhap: (dataLogin) => {
    /* return axios({
      method: "POST",
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      data: dataLogin,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    }); */
    return httpService.post("/api/QuanLyNguoiDung/DangNhap", dataLogin);
  },
  getUserList: () => {
    return httpService.get(
      "/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
    );
  },
  deleteUser: (taiKhoan) => {
    return httpService.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
};
