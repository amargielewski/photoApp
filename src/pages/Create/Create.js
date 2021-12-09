import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../hooks/useAuthContext";
import { database, fbStorage } from "../../firebase/config";
import { addDoc, collection, Timestamp } from "@firebase/firestore";
import { getDownloadURL, uploadBytes, ref } from "@firebase/storage";

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
        <StyledTitle>Add photo</StyledTitle>
        <StyledLabel>
          <StyledInputTitle>Photo Name:</StyledInputTitle>
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
          <StyledInputTitle>Photo Description</StyledInputTitle>
          <StyledTextarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            required
          ></StyledTextarea>
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>Upload Photo:</StyledInputTitle>
          <StyledInput type="file" onChange={handleFileChange} required />
        </StyledLabel>
        {photoError && <p>{photoError}</p>}
        <StyledButton>Add</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
}

export default Create;
