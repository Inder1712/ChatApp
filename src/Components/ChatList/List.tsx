import React from "react";
import ListHeader from "./ListHeader";
import PinnedList from "./PinnedList";

export default function List() {
  return (
    <div className="h-screen  w-[30%]">
      <ListHeader />
      <PinnedList />
    </div>
  );
}
