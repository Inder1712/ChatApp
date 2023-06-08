import Msg from "./Msg";

export default function MsgBox() {
  return (
    <div className="flex flex-col h-[610px] justify-end items-end bg-gray-100 ">
      <div className="overflow-scroll space-y-3 p-4">
        <Msg />
        <Msg />
      </div>
    </div>
  );
}
