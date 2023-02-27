import { Route, Routes } from "react-router-dom";
import Client from "./pages/Client/Client";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import NewAppointment from "./pages/NewAppointment/NewAppointment";
import Staff from "./pages/Staff/Staff.jsx";
import EditResource from "./pages/EditResource/EditResource"
import RequestResource from "./pages/RequestResource/RequestResource";
import "./styles/base/_reset.scss";
import "./styles/base/_typography.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/booking" element={<NewAppointment />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/client" element={<Client />} />
      <Route path="/editresource" element={<EditResource />} />
      <Route path="/requestresource" element={<RequestResource />} />
    </Routes>
  );
};

export default App;
