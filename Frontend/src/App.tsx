import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Loginform from "./Components/Loginform";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/login" element={<Loginform />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
