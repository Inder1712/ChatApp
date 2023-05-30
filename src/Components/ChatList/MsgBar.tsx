import React, { useState } from "react";

export default function MsgBar() {
  const [username, setUsername] = useState("Alpha");
  return (
    <div className="w-full h-16  flex justify-center items-center">
      <div className="w-[100%] flex   h-full  pl-4 space-x-2 items-center ">
        <div className="h-12 w-12 rounded-full bg-gray-200">
          <img
            className="h-full w-full rounded-full"
            src="https://yt3.googleusercontent.com/ytc/AGIKgqPYT0OfCYv83t6HY5RjmZ4S_kHDjveRYyWdUA_E=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
        <div className="h-12 w-[70%]">
          <div className="h-5 bg-white w-[100%] pt-1 text-sm font-bold">
            {username}
          </div>
          <div className="text-sm h-5 text-gray-600">msg</div>
        </div>
        <div className="h-full w-[10%] bg-white">
          <div className="text-xs pt-1 text-gray-600 font-semibold">
            10:10:10
          </div>
          <div className="text-xs pt-1 w-full flex justify-center items-center ">
            <div className="h-5 w-5 bg-red-600 rounded-full text-white text-xs flex justify-center items-center font-bold">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
