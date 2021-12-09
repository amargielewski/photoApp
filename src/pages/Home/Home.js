import PhotoList from "../../components/photoList/PhotoList";
import { useCollection } from "../../hooks/useCollection";
import { ArrowUp } from "react-feather";
import { useState, useEffect } from "react";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      {isVisible && (
        <StyledScrollButton onClick={scrollToTop}>
          <ArrowUp color={"#fff"} size={25} />
        </StyledScrollButton>
      )}
    </StyledWrapper>
  );
}

export default Home;
