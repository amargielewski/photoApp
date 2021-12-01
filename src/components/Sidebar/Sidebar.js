import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { paths } from "../../paths/paths";
import CameraIcon from "../../assets/images/camera.svg";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Avatar from "../avatar/Avatar";

const StyledContainer = styled.div`
  min-width: 300px;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
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
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-10px);
  }
`;

const StyledImage = styled.img`
  width: 80px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: ${({ theme }) => theme.fontSize.m};
  transition: 0.3s;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;
const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  letter-spacing: 3px;
`;

const StyledLogoutButton = styled.button`
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryFont};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryFont};
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;

  :hover {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-10px);
  }
`;

const StyledUserContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 300px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.secondaryFont};
    bottom: -10px;
  }
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
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primaryBackground};
  }
`;

const StyledUsername = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.secondaryFont};
  margin-right: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

function Sidebar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitleContainer>
          <StyledTitle>PhotoApp</StyledTitle>
          <StyledImage src={CameraIcon} />
          {user && (
            <StyledUserContainer>
              <StyledUsername>Hi {user.displayName}</StyledUsername>
              <Avatar url={user.photoURL} />
            </StyledUserContainer>
          )}
        </StyledTitleContainer>
        <StyledLinksContainer>
          <StyledNavLink to={paths.home}>Home</StyledNavLink>
          <StyledNavLink to={paths.create}>Create</StyledNavLink>
          {user && (
            <StyledNavLink to={`/profile/${user.uid}`}>Profile</StyledNavLink>
          )}
        </StyledLinksContainer>
        <LoginSignupWrapper>
          {!user ? (
            <>
              <StyledNavLink to={paths.login}>Login</StyledNavLink>
              <StyledNavLink to={paths.signup}>Signup</StyledNavLink>
            </>
          ) : (
            <StyledLogoutButton onClick={logout}>logout</StyledLogoutButton>
          )}
        </LoginSignupWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Sidebar;
