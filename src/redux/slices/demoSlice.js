import { createSlice } from "@reduxjs/toolkit";

let initialState = { number: 100 };

const demoSlice = createSlice({
  name: "demoSlice",
  initialState,
  reducers: {
    //luu cac action
    tangSoLuong: (state, action) => {
      console.log("action", action);
      state.number += action.payload;
    },
    giamSoLuong: (state, action) => {
      state.number -= action.payload;
    },
  },
});

export default demoSlice.reducer; //export reducer

export const { tangSoLuong, giamSoLuong } = demoSlice.actions; //export action (tach pha tu)
