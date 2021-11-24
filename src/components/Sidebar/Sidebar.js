import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { paths } from "../../paths/paths";
import CameraIcon from "../../assets/images/camera.svg";

const StyledContainer = styled.div`
  min-width: 300px;
  min-height: 100vh;
  height: 100%;
  background-color: #a63446;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
`;
const StyledWrapper = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const LoginSignupWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledImage = styled.img`
  width: 80px;
  color: white;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 20px 30px;
  font-weight: bold;
  transition: 0.3s;

  :hover {
    background-color: #fff;
    border-radius: 8px;
    color: #a63446;
    transform: translateY(-5px);
  }
`;
const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
`;

function Sidebar() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitleContainer>
          <StyledTitle>PhotoApp</StyledTitle>
          <StyledImage src={CameraIcon} />
        </StyledTitleContainer>
        <LoginSignupWrapper>
          <StyledNavLink to={paths.login}>Login</StyledNavLink>
          <StyledNavLink to={paths.signup}>Signup</StyledNavLink>
        </LoginSignupWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Sidebar;
