import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
//firebase
import {
  doc,
  getDoc,
  deleteDoc,
  Timestamp,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { database } from "../../firebase/config";
//context
import { useAuthContext } from "../../hooks/useAuthContext";

//text
import { pageText } from "../../PageText/PageText";
//components
import PhotoComment from "../../components/photoComment/PhotoComment";
import Avatar from "../../components/avatar/Avatar";
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
  StyledConfirmationDeleteButton,
  StyledConfirmationCancelButton,
} from "./PhotoDetailsStyle";
import { DeleteModal } from "../../components/DeleteModal/DeleteModal";

const COLLECTION_PHOTOS = "photos";

function PhotoDetails() {
  const [data, setData] = useState(null);
  const [newComment, setNewComment] = useState("");
  const { id: postID } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const docRef = doc(database, COLLECTION_PHOTOS, postID);

    getDoc(docRef).then((doc) => {
      setData(doc.data());
    });

    return () => controller.abort();
  }, [postID]);

  if (!data) return <div>{pageText.PhotoDetails.detailsMsg}</div>;

  const docRef = doc(database, COLLECTION_PHOTOS, postID);
  const handleDelete = async () => {
    await deleteDoc(docRef);
    navigate("/");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    setNewComment("");
  };

  const commentSubmitOnEnter = (e) => {
    if (e.target.value.trim().length > 0) {
      if (e.key === "Enter" && e.shiftKey === false) {
        return handleSubmit(e);
      }
    }
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        {user.uid === data.createdBy.id && (
          <StyledDeleteButton onClick={handleModalOpen}>
            {pageText.PhotoDetails.deleteBtn}
          </StyledDeleteButton>
        )}
        <StyledAuthorContainer>
          <StyledAvatarContainer>
            <StyledAuthorName>
              {pageText.PhotoDetails.createdBy} {data.createdBy.displayName}
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
        <StyledPhotoTitle>
          {" "}
          {pageText.PhotoDetails.photoName} {data.name}
        </StyledPhotoTitle>
        <StyledPhotoDescription>
          {pageText.PhotoDetails.photoDescription} {data.description}
        </StyledPhotoDescription>

        <StyledImage src={data.photoURL} />
      </StyledContainer>
      <StyledCommentContainer>
        <PhotoComment id={postID} />

        <StyledForm onSubmit={handleSubmit}>
          <StyledFormLabel>
            <StyledFormTitle> {pageText.PhotoDetails.newCom}</StyledFormTitle>
            <StyledTextarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
              onKeyPress={commentSubmitOnEnter}
            />
          </StyledFormLabel>
          <StyledButton> {pageText.PhotoDetails.addCom}</StyledButton>
        </StyledForm>
      </StyledCommentContainer>
      {isModalOpen && (
        <DeleteModal>
          <StyledConfirmationDeleteButton onClick={handleDelete}>
            Delete
          </StyledConfirmationDeleteButton>
          <StyledConfirmationCancelButton onClick={handleModalClose}>
            Cancel
          </StyledConfirmationCancelButton>
        </DeleteModal>
      )}
    </StyledWrapper>
  );
}

export default PhotoDetails;
