import Sidebar from "./components/Sidebar/Sidebar";
import GlobalStyle from "./styles/GlobalStyles";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "./paths/paths";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const StyledWrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <StyledWrapper className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.create} element={<Create />} />
          <Route path={paths.signup} element={<Signup />} />
          <Route path={paths.login} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </StyledWrapper>
  );
}

export default App;
