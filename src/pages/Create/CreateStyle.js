import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 700px;
  height: 550px;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  align-items: center;

  @media (max-width: 1100px) {
    width: 600px;
  }

  @media (max-width: 950px) {
    width: 400px;
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
  width: 400px;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 5px 5px;
  display: block;

  @media (max-width: 950px) {
    width: 250px;
  } ;
`;

const StyledLabel = styled.label`
  margin-bottom: 15px;
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
  min-width: 400px;
  height: 150px;
  font-size: 20px;

  @media (max-width: 950px) {
    min-width: 250px;
  } ;
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
