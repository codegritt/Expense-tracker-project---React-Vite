import { AuthProvider } from "./utils/auth";
import { RequireAuth } from "./utils/RequireAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Loginform from "./Components/Loginform";
import Loader from "./ReusableComponents/Loader/Loader";
import styled from "styled-components";

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
                  <AppStyled>
                    <Header />
                  </AppStyled>
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

const AppStyled = styled.div`
  height: 100vh;
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
