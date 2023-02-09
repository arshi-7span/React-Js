import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import SearchUser from "./components/SearchUser";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="login-wrapper">
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/search" element={<SearchUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
