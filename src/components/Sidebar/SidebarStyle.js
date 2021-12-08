import styled from "styled-components";
import { Menu } from "react-feather";
import { NavLink } from "react-router-dom";

const StyledContainer = styled.div`
  min-width: 300px;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 750px) {
    width: 100%;
    height: 60px;
    min-height: auto;
  }
`;
const StyledWrapper = styled.div`
  height: 100%;
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

  @media (max-width: 750px) {
    margin-top: 500px;
  }
`;

const StyledImage = styled.img`
  width: 80px;

  @media (max-width: 750px) {
    margin-left: 40px;
    width: 50px;
  }
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

  @media (max-width: 750px) {
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
`;
const StyledTitle = styled.h2`
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  letter-spacing: 3px;

  @media (max-width: 750px) {
    margin: 0;
    display: none;
  }
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

  @media (max-width: 750px) {
    margin-top: 0;
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

  @media (max-width: 750px) {
    height: auto;
  }
`;

const StyledUsername = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.secondaryFont};
  margin-right: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  @media (max-width: 750px) {
    display: none;
  }
`;

const StyledNavWrapper = styled.div`
  flex: 1;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.3s;

  @media (max-width: 750px) {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: ${({ theme }) => theme.colors.primary};
    display: ${({ className }) => (className === "open" ? "none" : "block")};
  }
`;

const StyledMenu = styled(Menu)`
  display: none;
  @media (max-width: 750px) {
    margin-right: 20px;
    display: block;
  }
`;

export {
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
};
