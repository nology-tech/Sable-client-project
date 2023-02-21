import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import Staff from "./pages/Staff/Staff.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/staff" element={<Staff />} />
    </Routes>
  );
};

export default App;
