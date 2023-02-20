import { Route, Routes } from "react-router-dom";
import Button from "./components/Button/Button";
import Home from "./pages/Home/Home";
import "./styles/main.scss";

const App = () => {
  return (
  <div>
    
      <Routes>
      <Route path="*" element={<Home />}
      
       />  
    </Routes> 
    <Button buttonText = "test" />
    </div>
  );
};

export default App;
