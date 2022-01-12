import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useEffect, useState, useRef } from "react";
//components
import Avatar from "../avatar/Avatar";
//firebase
import { database } from "../../firebase/config";
import { onSnapshot, doc, arrayRemove, updateDoc } from "@firebase/firestore";
//context
import { useAuthContext } from "../../hooks/useAuthContext";
//text
import { pageText } from "../../PageText/PageText";
//styles
import {
  StyledWrapper,
  StyledName,
  StyledCommentContent,
  StyledDeleteButton,
  StyledDateText,
  StyledUserContainer,
  StyledSingleCommentContainer,
  StyledCommentList,
} from "./PhotoCommentStyle";

function PhotoComment({ id }) {
  const [data, setData] = useState(null);
  const { user } = useAuthContext();
  const chatListRef = useRef(null);

  useEffect(() => {
    if (!chatListRef.current) return;
    const element = chatListRef.current;

    element.scrollTop = element.scrollHeight - element.clientHeight;
  }, [data]);

  useEffect(() => {
    const controller = new AbortController();
    const docRef = doc(database, "photos", id);
    onSnapshot(docRef, (doc) => {
      setData(doc.data());
    });

    return () => controller.abort();
  }, [id]);

  const handleDelete = async (com) => {
    const commentRef = doc(database, "photos", id);
    await updateDoc(commentRef, {
      comments: arrayRemove(com),
    });
  };
  if (!data) return <div>{pageText.PhotoComments.commentMsg}</div>;
  return (
    <StyledWrapper>
      <StyledCommentList ref={chatListRef}>
        {data.comments.map((com) => (
          <StyledSingleCommentContainer key={com.createdAt}>
            {user.uid === com.uid && (
              <StyledDeleteButton onClick={() => handleDelete(com)}>
                X
              </StyledDeleteButton>
            )}
            <StyledUserContainer>
              <Avatar userID={com.uid} src={com.photoURL} />
              <StyledName>{com.displayName}</StyledName>
            </StyledUserContainer>
            <StyledDateText>
              {formatDistanceToNow(com.createdAt.toDate(), {
                addSuffix: true,
              })}
            </StyledDateText>
            <StyledCommentContent>{com.content}</StyledCommentContent>
          </StyledSingleCommentContainer>
        ))}
      </StyledCommentList>
    </StyledWrapper>
  );
}

export default PhotoComment;
