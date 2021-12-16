import styled from "styled-components";
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 20px 0;
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
  @media (max-width: 1200px) {
    align-self: center;
  }
`;
const StyledFormTitle = styled.span``;

const StyledFormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledTextarea = styled.textarea`
  min-width: 250px;
  padding: 15px;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
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
};
