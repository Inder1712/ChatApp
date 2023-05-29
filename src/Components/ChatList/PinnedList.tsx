import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function PinnedList() {
  return (
    <div className="h-32 bg-red-300  w-full">
      <div className="h-6 w-full bg-white text-gray-400 flex items-center text-xs font-bold">
        <LocationOnIcon fontSize="small" />
        Pinned Messages
      </div>
    </div>
  );
}
