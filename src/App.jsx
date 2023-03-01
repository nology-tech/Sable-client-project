import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Client from "./pages/Client/Client";
import EditResource from "./pages/EditResource/EditResource";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import NewAppointment from "./pages/NewAppointment/NewAppointment";
import RequestResource from "./pages/RequestResource/RequestResource";
import Resources from "./pages/Resources/Resources.jsx";
import Settings from "./pages/Settings/Settings";
import Staff from "./pages/Staff/Staff.jsx";
import "./styles/base/_reset.scss";
import "./styles/base/_typography.scss";

const App = () => {
  const [user, setUser] = useState(true);
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />} />
      </Routes>
      {user ? (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<NewAppointment />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/client" element={<Client />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/edit" element={<EditResource />} />
          <Route path="/resources/request" element={<RequestResource />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      ) : null}
    </>
  );
};

export default App;
