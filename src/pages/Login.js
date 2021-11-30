import styled from "styled-components";
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router";

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 700px;
  height: 400px;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  align-items: center;
`;

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  color: #333333;
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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);

    navigate("/");
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>Login Page</StyledTitle>
        <StyledLabel>
          <StyledInputTitle>Email:</StyledInputTitle>
          <StyledInput
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
        <StyledButton>login</StyledButton>
        {error && <p>{error}</p>}
      </StyledForm>
    </StyledWrapper>
  );
}

export default Login;
