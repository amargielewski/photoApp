import Sidebar from "./components/Sidebar/Sidebar";
import GlobalStyle from "./styles/GlobalStyles";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "./paths/paths";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PhotoDetails from "./pages/PhotoDetails";
import UserProfile from "./pages/UserProfile";

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <StyledWrapper className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Sidebar />
        <StyledContainer>
          <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.create} element={<Create />} />
            <Route path={paths.signup} element={<Signup />} />
            <Route path={paths.login} element={<Login />} />
            <Route path={paths.photoDetailsId} element={<PhotoDetails />} />
            <Route path={paths.userProfile} element={<UserProfile />} />
          </Routes>
        </StyledContainer>
      </BrowserRouter>
    </StyledWrapper>
  );
}

export default App;
