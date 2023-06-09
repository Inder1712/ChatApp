import ListHeader from "./ListHeader";
import PinnedList from "./PinnedList";

import AllMsg from "./AllMsg";

export default function List() {
  return (
    <div className="h-screen  w-screen 2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[40%] sm:w-[50%]  border-2 border-gray-200">
      <ListHeader />
      <PinnedList />

      <AllMsg />
      <div className="h-[1px] bg-gray-200 w-full"></div>
    </div>
  );
}
