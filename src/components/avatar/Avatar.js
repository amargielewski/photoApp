import styled from "styled-components";

const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
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
