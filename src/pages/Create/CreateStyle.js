import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  margin: 0 20px;
  padding: 20px 100px;
  height: 550px;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  align-items: center;

  @media (max-width: 1100px) {
    padding: 20px 80px;
  }

  @media (max-width: 950px) {
    padding: 20px 50px;
  }

  @media (max-width: 750px) {
    padding: 20px 60px;
  }

  @media (max-width: 500px) {
    padding: 20px 30px;
  } ;
`;

const StyledTitle = styled.h2`
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primaryFont};
`;

const StyledInputTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const StyledInput = styled.input`
  max-width: 500px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 5px 5px;
  display: block;
`;

const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  text-transform: uppercase;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 10px 20px;
  background-color: #a63446;
  color: ${({ theme }) => theme.colors.secondaryFont};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  height: 150px;
  font-size: 20px;
`;

export {
  StyledTextarea,
  StyledButton,
  StyledTitle,
  StyledInputTitle,
  StyledInput,
  StyledWrapper,
  StyledForm,
  StyledLabel,
};
