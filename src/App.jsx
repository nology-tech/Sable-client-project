import { Route, Routes } from "react-router-dom";
import EditResource from "./pages/EditResource/EditResource";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import "./styles/base/_reset.scss";
import "./styles/base/_typography.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/editresource" element={<EditResource />} />
    </Routes>
  );
};

export default App;
