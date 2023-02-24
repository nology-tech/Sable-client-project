import { Route, Routes } from "react-router-dom";
import Client from "./pages/Client/Client";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import NewAppointment from "./pages/NewAppointment/NewAppointment";
import Settings from "./pages/Settings/Settings";
import Staff from "./pages/Staff/Staff.jsx";
import "./styles/base/_reset.scss";
import "./styles/base/_typography.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/booking" element={<NewAppointment />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/client" element={<Client />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default App;
