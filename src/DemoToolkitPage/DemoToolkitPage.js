import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { giamSoLuong, tangSoLuong } from "../redux/slices/demoSlice";

export default function DemoToolkitPage() {
  let giaTri = useSelector((state) => state.demoSlice.number);
  let dispatch = useDispatch();
  return (
    <div className="bg-blue-400 container text-gray-800 text-3xl mx-auto py-40">
      <button
        className="px-4 py-2 rounded bg-blue-300"
        onClick={() => {
          dispatch(tangSoLuong(10, " 3"));
        }}
      >
        +
      </button>
      <span className="mx-5 text-blue-800">{giaTri}</span>
      <button
        className="px-4 py-2 rounded bg-red-300 "
        onClick={() => {
          dispatch(giamSoLuong(10));
        }}
      >
        -
      </button>
    </div>
  );
}
