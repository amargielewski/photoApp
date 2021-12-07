import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-top: 50px;
`;

const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  ::after {
    position: absolute;
    content: "";
    width: 80%;
    background-color: ${({ theme }) => theme.colors.secondaryFont};
    height: 1px;
    bottom: -20px;
    transform: translateX(-50%);
    left: 50%;
  }
`;

const StyledPhotoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const StyledUserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const StyledUsername = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primaryFont};
`;

const StyledInfo = styled.p`
  margin-top: 50px;
  width: 100%;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export {
  StyledWrapper,
  StyledInfo,
  StyledUserContainer,
  StyledUserAvatar,
  StyledUsername,
  StyledPhotoContainer,
};
