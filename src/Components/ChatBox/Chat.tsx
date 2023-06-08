import ChatFotter from "./ChatFotter";
import Header from "./Header";
import MsgBox from "./MsgBox";

export default function Chat() {
  return (
    <div className="h-fit w-[100%] hidden sm:flex sm:flex-col sm:w-[50%]  ">
      <Header />
      <MsgBox />
      <ChatFotter />
    </div>
  );
}
