//components
import Avatar from "../avatar/Avatar";
//styles
import {
  StyledWrapper,
  StyledContainer,
  StyledName,
  StyledImage,
  CardWrapper,
  StyledInfoWrapper,
  StyledLink,
} from "./PhotoListStyle";

function PhotoList({ document }) {
  if (!document) return <div>Waiting for documents to load</div>;

  return (
    <StyledWrapper>
      {document &&
        document.map((doc) => (
          <StyledContainer key={doc.id}>
            <CardWrapper>
              <StyledLink to={`/details/${doc.id}`}>
                <StyledImage src={doc.photoURL} alt={doc.name} />
              </StyledLink>
              <StyledInfoWrapper>
                <Avatar
                  userID={doc.createdBy.id}
                  src={doc.createdBy.userPhotoURL}
                />
                <StyledName>Photo by: {doc.createdBy.displayName}</StyledName>
              </StyledInfoWrapper>
            </CardWrapper>
          </StyledContainer>
        ))}
    </StyledWrapper>
  );
}

export default PhotoList;
