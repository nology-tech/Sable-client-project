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
      <InputField id="first-name" label="First Name" placeholderText="Mark" handleInput={handleName}  />
      <InputField id="last-name" label="Last Name" placeholderText="Birchall" handleInput={handleName}  />
      <InputField id="email" label="Email Address" placeholderText="thiel90@hotmail.com" handleInput={handlEmail}  />
      <InputField id="number" label="Mobile Number" placeholderText="+44 1234 567890" handleInput={handlNumber}  />
    </div>
    </div>
  );
};

export default App;
