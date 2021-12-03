import { database } from "../../firebase/config";
import { onSnapshot, doc, arrayRemove, updateDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Avatar from "../avatar/Avatar";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../../hooks/useAuthContext";

const StyledWrapper = styled.div``;
const StyledName = styled.p`
  margin-left: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
const StyledCommentContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledCommentList = styled.ul`
  list-style: none;
`;
const StyledSingleCommentContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding: 10px;
  color: ${({ theme }) => theme.colors.primaryFont};
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;

const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const StyledDateText = styled.p`
  margin: 5px 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledDeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondaryFont};
  cursor: pointer;
`;

function PhotoComment({ id }) {
  const [data, setData] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const docRef = doc(database, "photos", id);
    const unsub = onSnapshot(docRef, (doc) => {
      setData(doc.data());
    });
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
          <StyledSingleCommentContainer key={com.id}>
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
