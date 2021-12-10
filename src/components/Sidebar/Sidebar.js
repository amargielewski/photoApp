import { useState } from "react";
//icons
import CameraIcon from "../../assets/images/camera.svg";
//context
import { useLayoutContext } from "../../hooks/useLayoutContext";
import { useAuthContext } from "../../hooks/useAuthContext";
//custom hooks
import { useLogout } from "../../hooks/useLogout";
//components
import Avatar from "../avatar/Avatar";
//paths
import { paths } from "../../paths/paths";

//text
import { pageText } from "../../PageText/PageText";
//styles
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
  StyledLink,
  StyledError,
} from "./SidebarStyle";

function Sidebar() {
  const { user } = useAuthContext();
  const { logout, error } = useLogout();
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

  const handleMenuClose = () => {
    setIsVisible(false);
    dispatch({ type: "LOCK_BODY_SCROLL", payload: false });
  };

  const handleLogout = async () => {
    handleMenuClose();
    logout();
  };

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitleContainer>
          <StyledLink to={paths.home}>
            <StyledTitle>{pageText.Sidebar.appName}</StyledTitle>
            <StyledImage src={CameraIcon} />
          </StyledLink>
          {user && (
            <StyledUserContainer>
              <StyledUsername>Hi {user.displayName}</StyledUsername>
              <Avatar
                onClick={handleMenuClose}
                src={user.photoURL}
                userID={user.uid}
              />
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
              <StyledNavLink onClick={handleMenuClose} to={paths.home}>
                {pageText.Sidebar.pathsName.home}
              </StyledNavLink>
              <StyledNavLink onClick={handleMenuClose} to={paths.create}>
                {pageText.Sidebar.pathsName.create}
              </StyledNavLink>

              <StyledNavLink
                onClick={handleMenuClose}
                to={`/profile/${user.uid}`}
              >
                {pageText.Sidebar.pathsName.profile}
              </StyledNavLink>
            </StyledLinksContainer>
          )}

          <LoginSignupWrapper>
            {!user ? (
              <>
                <StyledNavLink onClick={handleMenuClose} to={paths.login}>
                  {pageText.Sidebar.pathsName.login}
                </StyledNavLink>
                <StyledNavLink onClick={handleMenuClose} to={paths.signup}>
                  {pageText.Sidebar.pathsName.signup}
                </StyledNavLink>
              </>
            ) : (
              <StyledLogoutButton onClick={handleLogout}>
                {pageText.Sidebar.logout}
              </StyledLogoutButton>
            )}
            {error && <StyledError></StyledError>}
          </LoginSignupWrapper>
        </StyledNavWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Sidebar;
