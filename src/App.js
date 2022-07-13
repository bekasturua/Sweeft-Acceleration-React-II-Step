import "./App.css";
import Users from "./components/Users/Users";
import User from "./components/User/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:productId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
