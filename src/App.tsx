import "./App.css";
import Chat from "./Components/ChatBox/Chat";
import List from "./Components/ChatList/List";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex ">
        <List />
        <Chat />
      </div>
    </>
  );
}

export default App;
