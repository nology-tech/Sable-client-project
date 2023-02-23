import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
// import NewAppointment from "./pages/NewAppointment/NewAppointment";

import "./styles/base/_reset.scss"
import "./styles/base/_typography.scss"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/new-appointment" element = {<NewAppointment/>} /> */}
    </Routes>
  );
};



export default App;
