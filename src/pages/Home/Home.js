import PhotoList from "../../components/photoList/PhotoList";
import { useCollection } from "../../hooks/useCollection";
import styled from "styled-components";
import { useState } from "react";

import {
  StyledInput,
  StyledSearchContainer,
  StyledInputText,
} from "./HomeStyle";

const StyledWrapper = styled.div``;
function Home() {
  const { documents, error } = useCollection("photos");
  const [name, setName] = useState("");

  let project =
    documents &&
    documents.filter((item) => {
      let username = item.createdBy.displayName.toLowerCase();
      let searchName = name.toLowerCase();

      if (!name) return true;
      if (username.includes(searchName)) {
        return true;
      }
      return false;
    });

  console.log(project.length);
  return (
    <StyledWrapper>
      <p>Search for photos by username:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {error && <div>{error}</div>}
      {documents && <PhotoList document={project} />}
      {project.length === 0 && <div>This user has no photos :C</div>}
    </StyledWrapper>
  );
}

export default Home;
