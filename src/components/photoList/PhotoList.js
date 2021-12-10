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
import { pageText } from "../../PageText/PageText";

function PhotoList({ document }) {
  if (!document) return <div>{pageText.PhotoList.photosMsg}</div>;

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
                <StyledName>
                  {pageText.PhotoList.photoCreatedBy}
                  {doc.createdBy.displayName}
                </StyledName>
              </StyledInfoWrapper>
            </CardWrapper>
          </StyledContainer>
        ))}
    </StyledWrapper>
  );
}

export default PhotoList;
