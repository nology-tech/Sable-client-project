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
    <Button className= "app__button" buttonText = "test"/>
    </div>
    </div>
  );
};

export default App;
