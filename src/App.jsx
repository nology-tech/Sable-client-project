import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import UserInfoContainer from "./containers/UserInfoContainer/UserInfoContainer";

const App = () => {
  return (    
    <div>
    <Routes>
      <Route path="*" element={<Home />}/>  
    </Routes> 
    <div className="input-field-container">
     <UserInfoContainer />
    </div>
    </div>
  );
};

export default App;
