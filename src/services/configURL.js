import axios from "axios";
import { localStorageService } from "./localStorageService";
export const BASE_URL = "https://movienew.cybersoft.edu.vn";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMyIsIkhldEhhblN0cmluZyI6IjEwLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NTk4NzIwMDAwMCIsIm5iZiI6MTY0NTgwODQwMCwiZXhwIjoxNjc2MTM0ODAwfQ.eP1tQ1Ucwbf0A94jW8e7zfHEKZS8iYyG0EIiHa9udpw";

//create axios instance
export const httpService = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    Authorization: "Bearer " + localStorageService.getUserInfor()?.accessToken,
  },
});
