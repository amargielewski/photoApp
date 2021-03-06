import { useState } from "react";
import { useNavigate } from "react-router";

//context
import { useAuthContext } from "../../hooks/useAuthContext";
//text
import { pageText } from "../../PageText/PageText";
//firebase
import { database, fbStorage } from "../../firebase/config";
import { addDoc, collection, Timestamp } from "@firebase/firestore";
import { getDownloadURL, uploadBytes, ref } from "@firebase/storage";
//styles
import {
  StyledTextarea,
  StyledButton,
  StyledTitle,
  StyledInputTitle,
  StyledInput,
  StyledWrapper,
  StyledForm,
  StyledLabel,
} from "./CreateStyle";

function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoError, setPhotoError] = useState(null);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setPhoto(null);

    let selected = e.target.files[0];

    if (!selected) {
      setPhotoError("Please Select a File");
      return;
    }
    if (!selected.type.includes("image")) {
      setPhotoError("Selected file must be image");
      return;
    }
    if (selected.size > 5000000) {
      setPhotoError("Image file size must be less then 500000kb");
      return;
    }

    setPhoto(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const photoRef = await collection(database, "photos");

    const uploadPath = `/photos/${user.uid}/${photo.name}`;

    const imageRef = ref(fbStorage, uploadPath);

    await uploadBytes(imageRef, photo);

    const getUrl = await getDownloadURL(imageRef).then((url) => url);

    const createdBy = {
      displayName: user.displayName,
      userPhotoURL: user.photoURL,
      id: user.uid,
    };

    const project = {
      name,
      description,
      photoURL: getUrl,
      comments: [],
      createdBy,
      createdDate: Timestamp.fromDate(new Date()),
    };

    await addDoc(photoRef, project);
    navigate("/");
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>{pageText.Create.title}</StyledTitle>
        <StyledLabel>
          <StyledInputTitle>{pageText.Create.nameInput}</StyledInputTitle>
          <StyledInput
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>
            {pageText.Create.descriptionInput}
          </StyledInputTitle>
          <StyledTextarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            required
          ></StyledTextarea>
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>{pageText.Create.uploadInput}</StyledInputTitle>
          <StyledInput type="file" onChange={handleFileChange} required />
        </StyledLabel>
        {photoError && <p>{photoError}</p>}
        <StyledButton> {pageText.Create.button}</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
}

export default Create;
