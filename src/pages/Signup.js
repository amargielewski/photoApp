import styled from "styled-components";
import { useState } from "react";
const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 700px;
  height: 450px;
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
  font-weight: 400;
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
  align-self: center;
  border: none;
  font-size: 20px;
  padding: 10px 20px;
  background-color: #a63446;
  color: white;
  cursor: pointer;
  border-radius: 8px;
`;

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password, name);
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
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>Password:</StyledInputTitle>
          <StyledInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>Name:</StyledInputTitle>
          <StyledInput
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </StyledLabel>
        <StyledButton>Signup</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
}

export default Signup;
