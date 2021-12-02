import styled from "styled-components";
import Avatar from "../avatar/Avatar";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  cursor: pointer;
  margin: 20px;
`;

const StyledImage = styled.img`
  margin-top: 20px;
  padding: 0 20px;
  width: 250px;
  height: 250px;
`;

const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin: 20px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryFont};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledWrapper = styled.div`
  margin-left: 50px;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
`;

function PhotoList({ document }) {
  if (!document) return <div>Waiting for documents to load</div>;

  return (
    <StyledWrapper>
      {document &&
        document.map((doc) => (
          <StyledLink key={doc.id} to={"/details/" + doc.id}>
            <CardWrapper key={doc.id}>
              <StyledImage src={doc.photoURL} alt={doc.name} />
              <StyledInfoWrapper>
                <Avatar url={doc.createdBy.userPhotoURL} />
                <StyledName>Photo by: {doc.createdBy.displayName}</StyledName>
              </StyledInfoWrapper>
            </CardWrapper>
          </StyledLink>
        ))}
    </StyledWrapper>
  );
}

export default PhotoList;
