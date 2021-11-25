import { useState } from "react";
import styled from "styled-components";
import { useAuthContext } from "../hooks/useAuthContext";
import { database, fbStorage } from "../firebase/config";
import { addDoc, collection } from "@firebase/firestore";
import { getDownloadURL, uploadBytes, ref } from "@firebase/storage";

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 700px;
  height: 550px;
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  align-items: center;
`;

const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  color: #333333;
`;

const StyledInputTitle = styled.span`
  font-size: 20px;
  font-weight: 4s00;
`;

const StyledInput = styled.input`
  width: 400px;
  font-size: 20px;
  padding: 5px 5px;
  display: block;
`;

const StyledLabel = styled.label`
  margin-bottom: 15px;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  text-transform: uppercase;
  border: none;
  font-size: 20px;
  padding: 10px 20px;
  background-color: #a63446;
  color: white;
  cursor: pointer;
  border-radius: 8px;
`;

const StyledTextarea = styled.textarea`
  display: block;
  min-width: 400px;
  height: 150px;
  font-size: 20px;
`;

function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoError, setPhotoError] = useState(null);
  const { user } = useAuthContext();

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
    if (selected.size > 500000) {
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
    };

    await addDoc(photoRef, project);
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
