import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledContainer = styled.div`
  min-width: 300px;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;

  @media (max-width: 750px) {
    min-width: 200px;
  }
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
  margin: 20px 0;
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

    @media (max-width: 750px) {
      width: 200px;
    }
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
};
