import styled from "styled-components";
import Avatar from "../avatar/Avatar";

const CardWrapper = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 20px;
`;

const StyledImage = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 200px;
`;

const StyledName = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const StyledInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
`;

const StyledAvatar = styled(Avatar)``;

function PhotoList({ document }) {
  return (
    <div>
      {document &&
        document.map((doc) => (
          <CardWrapper key={doc.id}>
            <StyledImage src={doc.photoURL} alt={doc.name} />
            <StyledInfoWrapper>
              <StyledAvatar url={doc.createdBy.userPhotoURL} />
              <StyledName>Author: {doc.createdBy.displayName}</StyledName>
            </StyledInfoWrapper>
          </CardWrapper>
        ))}
    </div>
  );
}

export default PhotoList;
