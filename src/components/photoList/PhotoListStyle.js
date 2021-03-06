import styled from "styled-components";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  margin: 20px;
`;

const StyledImage = styled.img`
  margin-top: 20px;
  padding: 0 20px;
  width: 250px;
  height: 250px;

  @media (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 750px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 450px) {
    width: 200px;
    height: 200px;
  }
`;

const StyledLink = styled(Link)``;

const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin: 20px 0;
`;

const StyledContainer = styled.div`
  color: ${({ theme }) => theme.colors.primaryFont};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledWrapper = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1100px) {
    margin-left: 10px;
  }

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

export {
  StyledWrapper,
  StyledContainer,
  StyledName,
  StyledImage,
  CardWrapper,
  StyledInfoWrapper,
  StyledLink,
};
