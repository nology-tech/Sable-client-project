import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login.jsx";
import "./styles/main.scss";
const App = () => {
  return (    
    <Routes>
<<<<<<< HEAD
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
=======
      <Route path="*" element={<Home />}/>  
    </Routes> 
>>>>>>> 396616128904104f8b1f115a789d678ee686fecb
  );
};

export default App;
