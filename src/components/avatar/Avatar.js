import styled from "styled-components";

const StyledAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

function Avatar({ url }) {
  return (
    <div>
      <StyledAvatar src={url} />
    </div>
  );
}

export default Avatar;
