import React from "react";
import { PuffLoader } from "react-spinners";
import { useSelector } from "react-redux";

export default function SpinnerComponent() {
  let isSpinnerLoading = useSelector((state) => {
    return state.spinnerSlice.isSpinnerOpen;
  });
  return isSpinnerLoading ? (
    <div className="fixed z-50 w-screen h-screen bg-gray-300 flex items-center justify-center">
      <PuffLoader color="#801919" size={99} speedMultiplier={3} />
    </div>
  ) : (
    <></>
  );
}
