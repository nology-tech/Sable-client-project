import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Client from "./pages/Client/Client";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import NewAppointment from "./pages/NewAppointment/NewAppointment";
import Staff from "./pages/Staff/Staff.jsx";
import "./styles/base/_reset.scss";
import "./styles/base/_typography.scss";

const App = () => {
  const [user, setUser] = useState(false);
  return (
    <Routes>
      {!user ? (
        <>
          <Route
            path="/"
            element={
              <>
                <Login user={user} setUser={setUser} />{" "}
                <Navigate replace to="/" />{" "}
              </>
            }
          />
        </>
      ) : (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<NewAppointment />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/client" element={<Client />} />
          <Route path="/resources" element={<Resources />} />
        </>
      )}
    </Routes>
  );
};

export default App;
