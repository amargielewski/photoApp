import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { database } from "../firebase/config";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../components/avatar/Avatar";
import { useAuthContext } from "../hooks/useAuthContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledContainer = styled.div`
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  padding: 50px 50px;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 800px;
  min-width: 500px;
`;

const StyledAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  ::after {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    content: "";
    bottom: -5px;
  }
`;

const StyledAuthorName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-right: 15px;
`;

const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDateContainer = styled.div`
  display: flex;
`;

const StyledDateText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const StyledDeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  padding: 10px;
  cursor: pointer;
`;

function PhotoDetails() {
  const [data, setData] = useState(null);
  const { id: postID } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const docRef = doc(database, "photos", postID);
    const docSnap = getDoc(docRef).then((doc) => {
      setData(doc.data());
    });
  }, [postID]);

  if (!data) return <div>Waiting for Data</div>;

  const handleDelete = async () => {
    const docRef = doc(database, "photos", postID);
    await deleteDoc(docRef);
    navigate("/");
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        {user.uid === data.createdBy.id && (
          <StyledDeleteButton onClick={handleDelete}>
            Delete Post
          </StyledDeleteButton>
        )}
        <StyledAuthorContainer>
          <StyledAvatarContainer>
            <StyledAuthorName>
              Created by: {data.createdBy.displayName}
            </StyledAuthorName>

            <Avatar url={data.createdBy.userPhotoURL} />
          </StyledAvatarContainer>
          <StyledDateContainer>
            <StyledDateText>
              {"Created: " +
                formatDistanceToNow(data.createdDate.toDate(), {
                  addSuffix: true,
                })}
            </StyledDateText>
          </StyledDateContainer>
        </StyledAuthorContainer>
        <h2>Photo Name: {data.name}</h2>
        <p>Photo Description: {data.description}</p>

        <StyledImage src={data.photoURL} />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default PhotoDetails;
