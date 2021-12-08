import { paths } from "../../paths/paths";
import CameraIcon from "../../assets/images/camera.svg";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Avatar from "../avatar/Avatar";
import { useState } from "react";
import {
  StyledContainer,
  StyledWrapper,
  LoginSignupWrapper,
  StyledImage,
  StyledNavLink,
  StyledTitleContainer,
  StyledTitle,
  StyledLogoutButton,
  StyledUserContainer,
  StyledLinksContainer,
  StyledUsername,
  StyledNavWrapper,
  StyledMenu,
} from "./SidebarStyle";

function Sidebar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const [isVisible, setIsVisible] = useState(true);

  const handleOpen = () => {
    if (isVisible) setIsVisible(false);
    if (!isVisible) setIsVisible(true);
  };

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitleContainer>
          <StyledTitle>PhotoApp</StyledTitle>
          <StyledImage src={CameraIcon} />
          {user && (
            <StyledUserContainer>
              <StyledUsername>Hi {user.displayName}</StyledUsername>
              <Avatar src={user.photoURL} userID={user.uid} />
            </StyledUserContainer>
          )}
          <StyledMenu onClick={handleOpen} size={48} />
        </StyledTitleContainer>

        <StyledNavWrapper className={isVisible ? "open" : ""}>
          {user && (
            <StyledLinksContainer>
              <StyledNavLink to={paths.home}>Home</StyledNavLink>
              <StyledNavLink to={paths.create}>Create</StyledNavLink>

              <StyledNavLink to={`/profile/${user.uid}`}>Profile</StyledNavLink>
            </StyledLinksContainer>
          )}

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
        </StyledNavWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Sidebar;
