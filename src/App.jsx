import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import NavContainer from "./containers/NavContainer/NavContainer";
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <NavContainer />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
