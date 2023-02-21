import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import InputField from "./components/InputField/InputField";

const App = () => {
  return (    
    <div>
    <Routes>
      <Route path="*" element={<Home />}/>  
    </Routes> 
    <div className="input-field-container">
      <InputField id="first-name" label="First Name" />
    </div>
    </div>
  );
};

export default App;
