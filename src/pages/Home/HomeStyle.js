import styled from "styled-components";

const StyledInput = styled.input`
  max-width: 300px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  padding: 10px 20px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};

  @media (max-width: 500px) {
    max-width: 200px;
  }
`;

const StyledInputText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 20px;
  @media (max-width: 750px) {
    margin-top: 20px;
  }
`;

const StyledSearchContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 50px;

  color: ${({ theme }) => theme.colors.primaryFont};

  @media (max-width: 500px) {
    margin-left: 20px;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInfoBox = styled.div`
  margin-top: 50px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: 3px;
  text-align: center;
`;

const StyledScrollButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
`;

export {
  StyledInfoBox,
  StyledInput,
  StyledSearchContainer,
  StyledInputText,
  StyledWrapper,
  StyledScrollButton,
};
