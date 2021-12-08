import PhotoList from "../../components/photoList/PhotoList";
import { useCollection } from "../../hooks/useCollection";
import { useEffect, useState } from "react";
import { ChevronsUp } from "react-feather";
import {
  StyledInput,
  StyledSearchContainer,
  StyledInputText,
  StyledWrapper,
  StyledInfoBox,
  StyledScrollButton,
} from "./HomeStyle";

function Home() {
  const { documents, error, isPending } = useCollection("photos");
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  // console.log("isPending:", isPending);
  return (
    <StyledWrapper>
      <StyledSearchContainer>
        <StyledInputText>Search for photos by username:</StyledInputText>
        <StyledInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
      </StyledSearchContainer>

      {error && <StyledInfoBox>{error}</StyledInfoBox>}
      {isPending && <StyledInfoBox>Loading...</StyledInfoBox>}
      {project && <PhotoList document={project} />}
      {project && project.length === 0 && (
        <StyledInfoBox>This user has no photos :(</StyledInfoBox>
      )}
      {isVisible && (
        <StyledScrollButton onClick={scrollToTop}>
          {" "}
          <ChevronsUp size={25} color={"#fff"} />
        </StyledScrollButton>
      )}
    </StyledWrapper>
  );
}

export default Home;
