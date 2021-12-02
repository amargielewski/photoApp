import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import PhotoList from "../components/photoList/PhotoList";
import { useAuthContext } from "../hooks/useAuthContext";

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
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondaryFont};
    height: 1px;
    bottom: -20px;
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

function UserProfile() {
  const { id } = useParams();
  const { user } = useAuthContext();

  const { documents } = useCollection("photos", ["createdBy.id", "==", id]);
  console.log(documents);
  return (
    <StyledWrapper>
      {user && (
        <StyledUserContainer>
          <StyledUserAvatar src={user.photoURL} alt={user.uid} />
          <StyledUsername>{user.displayName}</StyledUsername>
        </StyledUserContainer>
      )}
      <StyledPhotoContainer>
        <PhotoList document={documents} />
      </StyledPhotoContainer>
    </StyledWrapper>
  );
}

export default UserProfile;
