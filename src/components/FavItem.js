import React from "react";
import { removeFav } from "../actions";
import { useDispatch } from "react-redux";

function FavItem({ title, output }) {
  const dispatch = useDispatch();

  function handleRemove(a) {
    dispatch(removeFav(a));
  }
  return (
    <div className="bg-white shadow hover:shadow-lg p-3 pl-5 flex items-center group transition-all">
      <div className="flex-1 pr-4">{title}</div>
      <button
        onClick={() => handleRemove(output)}
        className="transition-all px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}

export default FavItem;

