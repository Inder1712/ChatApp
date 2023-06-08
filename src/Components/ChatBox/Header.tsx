import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
export default function Header() {
  return (
    <div className="w-[100%] bg-red-200">
      <div className="h-20 w-full bg-white flex   items-center p-2">
        <div className="h-12 w-12 rounded-full bg-gray-200">
          <img
            className="h-full w-full rounded-full"
            src="https://yt3.googleusercontent.com/ytc/AGIKgqPYT0OfCYv83t6HY5RjmZ4S_kHDjveRYyWdUA_E=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
        <div className="h-12 w-[60%]  p-2 ">
          <div>USer</div>
          <div className="text-green-600 font-semibold">typing...</div>
        </div>
        <div className="flex relative items-center w-[12%]  h-12">
          <div className="h-10 w-10 rounded-full absolute z-0 left-0 border-2 border-gray-200 bg-gray-200">
            <img
              className="h-full w-full rounded-full "
              src="https://yt3.googleusercontent.com/ytc/AGIKgqPYT0OfCYv83t6HY5RjmZ4S_kHDjveRYyWdUA_E=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className="h-10 absolute w-10 rounded-full z-10 left-4 border-2 border-gray-200 bg-gray-200">
            <img
              className="h-full w-full rounded-full"
              src="https://yt3.googleusercontent.com/ytc/AGIKgqPYT0OfCYv83t6HY5RjmZ4S_kHDjveRYyWdUA_E=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className="h-10 w-10 rounded-full z-20 absolute left-8 border-2 border-gray-200 bg-gray-200">
            <img
              className="h-full w-full rounded-full"
              src="https://yt3.googleusercontent.com/ytc/AGIKgqPYT0OfCYv83t6HY5RjmZ4S_kHDjveRYyWdUA_E=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className="h-10 w-10 rounded-full z-20 flex justify-center items-center text-sm font-semibold absolute left-12 border-2 border-gray-200 bg-gray-200">
            +5
          </div>
        </div>
        <div className="h-12 w-[20%]  flex items-center text-gray-400 justify-end space-x-3">
          <button>
            <VideocamOutlinedIcon />
          </button>
          <button>
            <CallOutlinedIcon />
          </button>
          <button>
            <MoreHorizOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
