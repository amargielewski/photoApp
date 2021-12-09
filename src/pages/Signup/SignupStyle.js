import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    height: 100%;
    margin-top: 50px;
    justify-content: flex-start;
  }
`;

const StyledForm = styled.form`
  padding: 20px 80px;

  height: 500px;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  align-items: center;

  @media (max-width: 900px) {
    padding: 20px 50px;
  }

  @media (max-width: 750px) {
    padding: 20px 50px;
  }

  @media (max-width: 750px) {
    padding: 20px 30px;
  }
`;

const StyledTitle = styled.h2`
  margin: 30px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primaryFont};

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  } ;
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
  margin-top: 5px;

  @media (max-width: 1100px) {
    width: 300px;
  }

  @media (max-width: 750px) {
    width: 250px;
  }

  @media (max-width: 500px) {
    width: 200px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
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
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondaryFont};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

export {
  StyledForm,
  StyledWrapper,
  StyledTitle,
  StyledInputTitle,
  StyledInput,
  StyledLabel,
  StyledButton,
};
