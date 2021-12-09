import { database } from "../../firebase/config";
import { onSnapshot, doc, arrayRemove, updateDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Avatar from "../avatar/Avatar";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../../hooks/useAuthContext";

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

  if (!data) return <div>No Comments to load;c</div>;
  return (
    <StyledWrapper>
      <StyledCommentList>
        {data.comments.map((com) => (
          <StyledSingleCommentContainer key={com.uid}>
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
