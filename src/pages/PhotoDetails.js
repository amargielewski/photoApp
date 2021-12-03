import { useParams, useNavigate } from "react-router-dom";
import {
  doc,
  getDoc,
  deleteDoc,
  Timestamp,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { database } from "../firebase/config";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../components/avatar/Avatar";
import { useAuthContext } from "../hooks/useAuthContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import PhotoComment from "../components/photoComment/PhotoComment";

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
  max-width: 1000px;
  min-width: 600px;
`;

const StyledAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 20px;

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
const StyledCommentContainer = styled.div`
  margin-left: 50px;
  position: relative;
`;
const StyledFormTitle = styled.span``;

const StyledFormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledTextarea = styled.textarea`
  min-width: 250px;
  padding: 15px;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  border: none;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.secondaryFont};
  background-color: ${({ theme }) => theme.colors.primary};
`;

function PhotoDetails() {
  const [data, setData] = useState(null);
  const [newComment, setNewComment] = useState("");
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

  const docRef = doc(database, "photos", postID);
  const handleDelete = async () => {
    await deleteDoc(docRef);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid,
      content: newComment,
      createdAt: Timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDoc(docRef, {
      comments: arrayUnion(commentToAdd),
    });

    setNewComment("");
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

            <Avatar
              userID={data.createdBy.id}
              src={data.createdBy.userPhotoURL}
            />
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
      <StyledCommentContainer>
        <PhotoComment id={postID} />
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormLabel>
            <StyledFormTitle>Make new comment:</StyledFormTitle>
            <StyledTextarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
          </StyledFormLabel>
          <StyledButton>Add Comment</StyledButton>
        </StyledForm>
      </StyledCommentContainer>
    </StyledWrapper>
  );
}

export default PhotoDetails;
