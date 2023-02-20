import { Route, Routes } from "react-router-dom";
import Button from "./components/Button/Button";
import Home from "./pages/Home/Home";
import "./styles/main.scss";

const App = () => {
 
  return (
  <div>
    
    <Routes>
    <Route path="*" element={<Home />}/>  
    </Routes> 
    <div className="button-container">
    <Button buttonText = "save" buttonStyle="isPurple" isInputIncomplete={true}  isPlus={false}/>
    </div>
    </div>
  );
};

export default App;
