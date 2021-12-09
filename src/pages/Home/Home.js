import PhotoList from "../../components/photoList/PhotoList";
import { useCollection } from "../../hooks/useCollection";
import styled from "styled-components";
import { useState } from "react";

import {
  StyledInfoBox,
  StyledInput,
  StyledSearchContainer,
  StyledInputText,
  StyledWrapper,
  StyledScrollButton,
} from "./HomeStyle";

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

  return (
    <StyledWrapper>
      <StyledSearchContainer>
        <StyledInputText>Search for photos by username:</StyledInputText>
        <StyledInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </StyledSearchContainer>

      {error && <StyledInfoBox>{error}</StyledInfoBox>}
      {documents && <PhotoList document={project} />}
      {project && project.length === 0 && (
        <StyledInfoBox>This user has no photos :C</StyledInfoBox>
      )}
    </StyledWrapper>
  );
}

export default Home;
