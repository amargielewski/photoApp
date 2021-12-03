import GlobalStyle from "./styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { paths } from "./paths/paths";
import { theme } from "./styles/mainTheme";

//pages && components
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PhotoDetails from "./pages/PhotoDetails";
import UserProfile from "./pages/UserProfile";
import { useAuthContext } from "./hooks/useAuthContext";

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const { user } = useAuthContext();
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
