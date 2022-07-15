import "./App.css";
import Users from "./components/Users/Users";
import User from "./components/User/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Friends from "./Friends/Friends";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/user/:friendId" element={<Friends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
