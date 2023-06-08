import LocationOnIcon from "@mui/icons-material/LocationOn";
import MsgBar from "./MsgBar";

export default function PinnedList() {
  const pinned = [1, 2, 3];
  return (
    <div className="h-fit  w-full">
      <div className="h-8 w-full bg-white text-gray-400 flex items-center text-xs font-bold pl-4">
        <LocationOnIcon fontSize="small" />
        Pinned Messages
      </div>
      <div className="h-[210px] overflow-scroll">
        {pinned.map(() => (
          <MsgBar />
        ))}
      </div>
    </div>
  );
}
