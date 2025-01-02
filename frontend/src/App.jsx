import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import HomePage from "./pages/HomePage";
import ChatPAge from "./pages/ChatPAge";

function App() {
  return (
    <>
      <div className="App">
        <Route path="/" component={HomePage} exact/>
        <Route path="/chats" component={ChatPAge} />
      </div>
    </>
  );
}

export default App;
