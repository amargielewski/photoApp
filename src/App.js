import { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

//paths & theme
import { paths } from "./paths/paths";
import { theme } from "./styles/mainTheme";
//pages && components
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";
import UserProfile from "./pages/UserProfile/UserProfile";
//styles
import GlobalStyle from "./styles/GlobalStyles";
//context
import { useAuthContext } from "./hooks/useAuthContext";
import { useLayoutContext } from "./hooks/useLayoutContext";

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 300px;

  @media (max-width: 1000px) {
    padding-left: 200px;
  }

  @media (max-width: 750px) {
    padding-left: 0;
    padding-top: 60px;
  }
`;

function App() {
  const { user } = useAuthContext();
  const { lockBodyScroll } = useLayoutContext();

  useEffect(() => {
    if (lockBodyScroll) document.body.classList.add("scroll-block");
    else document.body.classList.remove("scroll-block");
  }, [lockBodyScroll]);

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper className="App">
        <GlobalStyle />
        <BrowserRouter>
          <Sidebar />
          <StyledContainer>
            <Routes>
              <Route
                path={paths.home}
                element={user ? <Home /> : <Navigate to={paths.login} />}
              />
              <Route
                path={paths.create}
                element={user ? <Create /> : <Navigate to={paths.login} />}
              />
              <Route
                path={paths.signup}
                element={!user ? <Signup /> : <Navigate to={paths.home} />}
              />
              <Route
                path={paths.login}
                element={!user ? <Login /> : <Navigate to={paths.home} />}
              />
              <Route
                path={paths.photoDetailsId}
                element={
                  user ? <PhotoDetails /> : <Navigate to={paths.login} />
                }
              />
              <Route
                path={paths.userProfile}
                element={user ? <UserProfile /> : <Navigate to={paths.login} />}
              />

              <Route
                path="/*"
                element={
                  user ? (
                    <Navigate to={paths.home} />
                  ) : (
                    <Navigate to={paths.login} />
                  )
                }
              />
            </Routes>
          </StyledContainer>
        </BrowserRouter>
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default App;
