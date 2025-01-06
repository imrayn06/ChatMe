import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import './App.css'


function App() {
  console.log(import.meta.env.VITE_BACKEND_URL)
  return (
    <div className="App">
    <Routes >
      <Route path="/" element={<HomePage />} />
      <Route path="/chats" element={<ChatPage />} />
    </Routes>
    </div>
  );
}

export default App;
