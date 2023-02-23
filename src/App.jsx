import { Route, Routes } from "react-router-dom";
import BookingDetailsCard from "./components/BookingDetailsCard/BookingDetailsCard";
import ContactDetailsCard from "./components/ContactDetailsCard/ContactDetailsCard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
// import NewAppointment from "./pages/NewAppointment/NewAppointment";

import "./styles/base/_reset.scss"
import "./styles/base/_typography.scss"

const App = () => {
  const cardObject = [{birthDates: "10/10/2000" ,email:"mikolaj@gmail.com" , mobileNumber : "07424020033",bookingDate:"20/10/2000" ,bookingTime:"11:20",staffMember:"staff01"}]

  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/new-appointment" element = {<NewAppointment/>} /> */}
    </Routes>
    <div>
      <BookingDetailsCard cardObject = {cardObject} />
      <ContactDetailsCard cardObject = {cardObject} />
      </div>
    </div>
  );
};



export default App;
