import styled from "styled-components";

const StyledWrapper = styled.div``;
const StyledName = styled.p`
  margin-left: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
const StyledCommentContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledCommentList = styled.ul`
  overflow-y: scroll;
  max-height: 500px;
  list-style: none;
`;
const StyledSingleCommentContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  letter-spacing: 1px;
  line-height: 1.1em;
  margin: 15px 0;
  padding: 10px;
  color: ${({ theme }) => theme.colors.primaryFont};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const StyledDateText = styled.p`
  margin: 5px 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledDeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondaryFont};
  cursor: pointer;
`;

export {
  StyledWrapper,
  StyledName,
  StyledCommentContent,
  StyledDeleteButton,
  StyledDateText,
  StyledUserContainer,
  StyledSingleCommentContainer,
  StyledCommentList,
};
