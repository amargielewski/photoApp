import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledLink = styled(Link)``;

function Avatar({ src, userID, onClick }) {
  return (
    <StyledLink onClick={onClick} to={`/profile/${userID}`}>
      <StyledAvatar src={src} />
    </StyledLink>
  );
}

export default Avatar;
