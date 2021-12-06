import { useParams, useNavigate } from "react-router-dom";
import {
  doc,
  getDoc,
  deleteDoc,
  Timestamp,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { database } from "../../firebase/config";
import { useEffect, useState } from "react";
import Avatar from "../../components/avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import PhotoComment from "../../components/photoComment/PhotoComment";

//Styles
import {
  StyledPhotoTitle,
  StyledPhotoDescription,
  StyledButton,
  StyledForm,
  StyledTextarea,
  StyledFormLabel,
  StyledFormTitle,
  StyledCommentContainer,
  StyledWrapper,
  StyledContainer,
  StyledAuthorContainer,
  StyledImage,
  StyledAuthorName,
  StyledDateText,
  StyledDeleteButton,
  StyledAvatarContainer,
  StyledDateContainer,
} from "./PhotoDetailsStyle";

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
        <StyledPhotoTitle>Photo Name: {data.name}</StyledPhotoTitle>
        <StyledPhotoDescription>
          Photo Description: {data.description}
        </StyledPhotoDescription>

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
