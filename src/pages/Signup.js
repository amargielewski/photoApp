import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 700px;
  height: 500px;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  align-items: center;
`;

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primaryFont};
`;

const StyledInputTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const StyledInput = styled.input`
  width: 400px;
  font-size: ${({ theme }) => theme.fontSize.m};
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
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondaryFont};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
`;

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarError, setAvatarError] = useState(null);
  const { signup, isPending, error } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password, name, avatar);

    resetForm();
    navigate("/");
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
