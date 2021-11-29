import styled from "styled-components";
import Avatar from "../avatar/Avatar";
import { Link } from "react-router-dom";

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
  padding: 0 20px;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #444;
`;

const StyledWrapper = styled.div`
  margin-left: 50px;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
`;

const StyledAvatar = styled(Avatar)``;

function PhotoList({ document }) {
  return (
    <StyledWrapper>
      {document &&
        document.map((doc) => (
          <StyledLink key={doc.id} to={"/details/" + doc.id}>
            <CardWrapper key={doc.id}>
              <StyledImage src={doc.photoURL} alt={doc.name} />
              <StyledInfoWrapper>
                <StyledAvatar url={doc.createdBy.userPhotoURL} />
                <StyledName>Photo by: {doc.createdBy.displayName}</StyledName>
              </StyledInfoWrapper>
            </CardWrapper>
          </StyledLink>
        ))}
    </StyledWrapper>
  );
}

export default PhotoList;
