import { AuthProvider } from "./utils/auth";
import { RequireAuth } from "./utils/RequireAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Loginform from "./Components/Loginform";
import Loader from "./ReusableComponents/Loader/Loader";

const App = () => {
  return (
    <>
      <Loader loading={undefined} local={undefined} />
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Header />
                </RequireAuth>
              }
            ></Route>
            <Route path="/login" element={<Loginform />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
