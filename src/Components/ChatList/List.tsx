import ListHeader from "./ListHeader";
import PinnedList from "./PinnedList";
import MsgBar from "./MsgBar";
import AllMsg from "./AllMsg";

export default function List() {
  return (
    <div className="h-screen  w-[30%] border-2 border-gray-200">
      <ListHeader />
      <PinnedList />

      <AllMsg />
      <div className="h-[1px] bg-gray-200 w-full"></div>
    </div>
  );
}
