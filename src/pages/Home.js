import PhotoList from "../components/photoList/PhotoList";
import { useCollection } from "../hooks/useCollection";
import styled from "styled-components";

const StyledWrapper = styled.div``;

function Home() {
  const { documents } = useCollection("photos");

  console.log(documents);
  return (
    <StyledWrapper>
      {documents && <PhotoList document={documents} />}
    </StyledWrapper>
  );
}

export default Home;
