import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

//Styles

import {
  StyledForm,
  StyledWrapper,
  StyledTitle,
  StyledInputTitle,
  StyledInput,
  StyledLabel,
  StyledButton,
} from "./SignupStyle";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarError, setAvatarError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password, name, avatar);

    resetForm();
  };

  const handleFileChange = (e) => {
    setAvatar(null);

    let selected = e.target.files[0];

    if (!selected) {
      setAvatarError("Please Select a File");
      return;
    }
    if (!selected.type.includes("image")) {
      setAvatarError("Selected file must be image");
      return;
    }
    if (selected.size > 500000) {
      setAvatarError("Image file size must be less then 500000kb");
      return;
    }

    setAvatar(selected);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar(null);
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>Signup Page</StyledTitle>
        <StyledLabel>
          <StyledInputTitle>Email:</StyledInputTitle>
          <StyledInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>Password:</StyledInputTitle>
          <StyledInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>Name:</StyledInputTitle>
          <StyledInput
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>Avatar:</StyledInputTitle>
          <StyledInput type="file" onChange={handleFileChange} required />
        </StyledLabel>
        {!isPending ? (
          <StyledButton>Signup</StyledButton>
        ) : (
          <StyledButton>Loading...</StyledButton>
        )}

        {avatarError && <div>{avatarError}</div>}

        {error && <div>{error}</div>}
      </StyledForm>
    </StyledWrapper>
  );
}

export default Signup;
