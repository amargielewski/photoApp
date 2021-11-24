import Sidebar from "./components/Sidebar/Sidebar";
import GlobalStyle from "./styles/GlobalStyles";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const StyledWrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <StyledWrapper className="App">
      <GlobalStyle />
      <Sidebar />
      <BrowserRouter>
        <p>hej</p>
      </BrowserRouter>
    </StyledWrapper>
  );
}

export default App;
