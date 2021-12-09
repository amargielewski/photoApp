import { paths } from "../../paths/paths";
import CameraIcon from "../../assets/images/camera.svg";
import { useLayoutContext } from "../../hooks/useLayoutContext";
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
  StyledMenuButtonOpen,
  StyledMenuButtonClose,
} from "./SidebarStyle";

function Sidebar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const { dispatch } = useLayoutContext();
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    if (isVisible) {
      setIsVisible(false);
      dispatch({ type: "LOCK_BODY_SCROLL", payload: false });
      return;
    }
    dispatch({ type: "LOCK_BODY_SCROLL", payload: true });
    setIsVisible(true);
  };

  const handleLogout = async () => {
    handleOpen();
    logout();
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
          {isVisible ? (
            <StyledMenuButtonClose
              onClick={handleOpen}
              size={40}
              color={"#fff"}
            />
          ) : (
            <StyledMenuButtonOpen
              onClick={handleOpen}
              size={40}
              color={"#fff"}
            />
          )}
        </StyledTitleContainer>

        <StyledNavWrapper className={isVisible ? "" : "open"}>
          {user && (
            <StyledLinksContainer>
              <StyledNavLink onClick={handleOpen} to={paths.home}>
                Home
              </StyledNavLink>
              <StyledNavLink onClick={handleOpen} to={paths.create}>
                Create
              </StyledNavLink>

              <StyledNavLink onClick={handleOpen} to={`/profile/${user.uid}`}>
                Profile
              </StyledNavLink>
            </StyledLinksContainer>
          )}

          <LoginSignupWrapper>
            {!user ? (
              <>
                <StyledNavLink onClick={handleOpen} to={paths.login}>
                  Login
                </StyledNavLink>
                <StyledNavLink onClick={handleOpen} to={paths.signup}>
                  Signup
                </StyledNavLink>
              </>
            ) : (
              <StyledLogoutButton onClick={handleLogout}>
                logout
              </StyledLogoutButton>
            )}
          </LoginSignupWrapper>
        </StyledNavWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Sidebar;
