import styled, { css } from "styled-components";
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.primaryFont};
  padding: 50px 50px;
  margin-left: 20px;

  @media (max-width: 1200px) {
    margin: 20px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 900px;
  max-height: 600px;
`;

const StyledAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 20px;

  ::after {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    content: "";
    bottom: -5px;
  }
`;

const StyledAuthorName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-right: 15px;
`;

const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDateContainer = styled.div`
  margin-left: 10px;
`;

const StyledDateText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const StyledDeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  padding: 10px;
  cursor: pointer;
`;
const StyledCommentContainer = styled.div`
  max-height: 100%;
  margin-left: 50px;
  margin-right: 20px;
  position: relative;
  padding-bottom: 20px;
  @media (max-width: 1400px) {
    align-self: flex-start;
    padding-left: 20px;
    margin-top: 20px;
  }
`;
const StyledFormTitle = styled.span`
  margin-top: 10px;
`;

const StyledFormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledTextarea = styled.textarea`
  min-width: 250px;
  padding: 15px;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  resize: none;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  border: none;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.secondaryFont};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const StyledPhotoTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin: 10px 0;
`;

const StyledPhotoDescription = styled.p`
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  max-width: 700px;
`;

const StyledConfirmationButton = css`
  padding: 12px 30px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: translateY(-5px);
  }
`;

const StyledConfirmationDeleteButton = styled.button`
  ${StyledConfirmationButton};
  background: #a63446;
`;

const StyledConfirmationCancelButton = styled.button`
  ${StyledConfirmationButton};
  border: 2px solid #a63446;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export {
  StyledPhotoTitle,
  StyledPhotoDescription,
  StyledButton,
  StyledForm,
  StyledTextarea,
  StyledFormLabel,
  StyledFormTitle,
  StyledCommentContainer,
  StyledWrapper,
  StyledContainer,
  StyledAuthorContainer,
  StyledImage,
  StyledAuthorName,
  StyledDateText,
  StyledDeleteButton,
  StyledAvatarContainer,
  StyledDateContainer,
  StyledConfirmationDeleteButton,
  StyledConfirmationCancelButton,
};
