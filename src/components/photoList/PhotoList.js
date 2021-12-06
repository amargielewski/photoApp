import styled from "styled-components";
import Avatar from "../avatar/Avatar";
import {
  StyledWrapper,
  StyledLink,
  StyledName,
  StyledImage,
  CardWrapper,
  StyledInfoWrapper,
} from "./PhotoListStyle";

function PhotoList({ document }) {
  if (!document) return <div>Waiting for documents to load</div>;

  return (
    <StyledWrapper>
      {document &&
        document.map((doc) => (
          <StyledLink key={doc.id} to={"/details/" + doc.id}>
            <CardWrapper key={doc.id}>
              <StyledImage src={doc.photoURL} alt={doc.name} />
              <StyledInfoWrapper>
                <Avatar
                  userID={doc.createdBy.id}
                  src={doc.createdBy.userPhotoURL}
                />
                <StyledName>Photo by: {doc.createdBy.displayName}</StyledName>
              </StyledInfoWrapper>
            </CardWrapper>
          </StyledLink>
        ))}
    </StyledWrapper>
  );
}

export default PhotoList;
