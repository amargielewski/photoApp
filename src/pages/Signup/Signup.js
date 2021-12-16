import { useState } from "react";
//hooks
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

//text
import { pageText } from "../../PageText/PageText";

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
    if (selected.size > 5000000) {
      setAvatarError("Image file size must be less then 5000000kb");
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
        <StyledTitle>{pageText.signup.title}</StyledTitle>
        <StyledLabel>
          <StyledInputTitle>{pageText.signup.email}</StyledInputTitle>
          <StyledInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>{pageText.signup.password}</StyledInputTitle>
          <StyledInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>{pageText.signup.displayName}</StyledInputTitle>
          <StyledInput
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>{pageText.signup.avatar}</StyledInputTitle>
          <StyledInput type="file" onChange={handleFileChange} required />
        </StyledLabel>
        {!isPending ? (
          <StyledButton>{pageText.signup.signupBtn}</StyledButton>
        ) : (
          <StyledButton>{pageText.signup.loadingBtn}</StyledButton>
        )}

        {avatarError && <div>{avatarError}</div>}

        {error && <div>{error}</div>}
      </StyledForm>
    </StyledWrapper>
  );
}

export default Signup;
