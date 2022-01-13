import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 0 10px;
  height: 25vh;
  background-color: #f2f2f2;
  cursor: auto;
`;

export const StyledTextContainer = styled.h2`
  margin-top: 40px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DeleteModal = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledModalContainer>
        <StyledTextContainer>Are you sure?</StyledTextContainer>
        <StyledButtonContainer>{children}</StyledButtonContainer>
      </StyledModalContainer>
    </StyledWrapper>
  );
};
