import React from "react";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function ListHeader() {
  return (
    <div className="w-[100%] bg-red-200">
      <div className="h-16 w-full bg-white flex ">
        <div className="flex w-[80%] items-center font-bold text-2xl pl-4 text-blue-500 h-full">
          Messages
        </div>
        <div className="flex items-center w-[10%]">
          <button className="bg-gray-100 w-9 text-gray-400 h-9 flex justify-center items-center rounded-full">
            <BorderColorOutlinedIcon />
          </button>
        </div>
        <div className="flex items-center">
          <button className="bg-gray-100 w-9 text-gray-400 h-9 flex justify-center items-center rounded-full">
            <SearchOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
