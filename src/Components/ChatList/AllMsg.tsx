import MsgBar from "./MsgBar";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
export default function AllMsg() {
  const pinned = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="h-fit  w-full">
      <div className="h-8 w-full bg-white text-gray-400 flex items-center text-xs font-bold pl-4">
        <MessageRoundedIcon fontSize="small" />
        &nbsp; All Messages
      </div>
      <div className=" h-[382px]  overflow-scroll">
        {pinned.map(() => (
          <MsgBar />
        ))}
      </div>
    </div>
  );
}
