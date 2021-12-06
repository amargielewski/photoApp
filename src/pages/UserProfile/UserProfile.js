import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import PhotoList from "../../components/photoList/PhotoList";

//Styles

import {
  StyledWrapper,
  StyledInfo,
  StyledUserContainer,
  StyledUserAvatar,
  StyledUsername,
  StyledPhotoContainer,
} from "./UserProfileStyle";

function UserProfile() {
  let { id } = useParams();

  const { documents } = useCollection("photos", ["createdBy.id", "==", id]);
  const { documents: userDoc } = useCollection("users", ["uid", "==", id]);

  if (!userDoc) return <div>Loading</div>;
  const { displayName, photoURL, uid } = userDoc[0];

  return (
    <StyledWrapper>
      {userDoc && (
        <StyledUserContainer>
          <StyledUserAvatar src={photoURL} alt={uid} />
          <StyledUsername>{displayName}</StyledUsername>
        </StyledUserContainer>
      )}
      <StyledPhotoContainer>
        {documents.length < 1 && (
          <StyledInfo>This user has no photos to load : (</StyledInfo>
        )}
        <PhotoList document={documents} />
      </StyledPhotoContainer>
    </StyledWrapper>
  );
}

export default UserProfile;
