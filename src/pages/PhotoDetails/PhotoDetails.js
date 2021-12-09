import { useParams, useNavigate } from "react-router-dom";
import {
  doc,
  getDoc,
  deleteDoc,
  Timestamp,
  updateDoc,
  arrayUnion,
  serverTimestamp,
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
    const controller = new AbortController();
    const docRef = doc(database, "photos", postID);

    getDoc(docRef).then((doc) => {
      setData(doc.data());
    });

    return () => controller.abort();
  }, [postID]);

  if (!data) return <div>Waiting for Data</div>;

  const docRef = doc(database, "photos", postID);
  const handleDelete = async () => {
    await deleteDoc(docRef);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(docRef);

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid,
      content: newComment,
      createdAt: Timestamp.fromDate(new Date()),
    };

    await updateDoc(docRef, {
      comments: arrayUnion(commentToAdd),
    });
    console.log(commentToAdd.key);
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
