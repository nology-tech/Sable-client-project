import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <h1>Sable Client Project</h1>
    </Routes>
  );
};

export default App;
