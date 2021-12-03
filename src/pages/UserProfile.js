import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import PhotoList from "../components/photoList/PhotoList";

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
  margin-top: 50px;
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

function UserProfile() {
  let { id } = useParams();

  const { documents } = useCollection("photos", ["createdBy.id", "==", id]);
  const { documents: userDoc } = useCollection("users", ["uid", "==", id]);

  if (!userDoc) return <div>Loading</div>;
  console.log(documents);
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
