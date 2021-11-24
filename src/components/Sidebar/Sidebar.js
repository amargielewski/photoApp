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
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  a {
    padding: 15px 20px;
    border-radius: 8px;
  }

  .active {
    background-color: #f2f2f2;
    color: #a63446;
    transform: translateY(-10px);
  }
`;

const StyledImage = styled.img`
  width: 90px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  transition: 0.3s;
  font-weight: 400;
`;
const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTitle = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 3px;
`;

const StyledLinksContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  a {
    padding: 10px 0;
    margin-top: 30px;
    text-align: center;
    width: 100%;
  }

  .active {
    color: #a63446;
    background-color: #f2f2f2;
  }
`;

function Sidebar() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitleContainer>
          <StyledTitle>PhotoApp</StyledTitle>
          <StyledImage src={CameraIcon} />
        </StyledTitleContainer>
        <StyledLinksContainer>
          <StyledNavLink to={paths.home}>Home</StyledNavLink>
          <StyledNavLink to={paths.create}>Create</StyledNavLink>
        </StyledLinksContainer>
        <LoginSignupWrapper>
          <StyledNavLink to={paths.login}>Login</StyledNavLink>
          <StyledNavLink to={paths.signup}>Signup</StyledNavLink>
        </LoginSignupWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Sidebar;
