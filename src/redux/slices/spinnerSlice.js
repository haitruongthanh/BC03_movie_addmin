import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isSpinnerOpen: false,
};

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setSpinnerLoading: (state, { payload }) => {
      state.isSpinnerOpen = payload;
    },
  },
});

export default spinnerSlice.reducer;
export const { setSpinnerLoading } = spinnerSlice.actions;
