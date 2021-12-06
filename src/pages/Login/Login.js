import { useState } from "react";
import useLogin from "../../hooks/useLogin";

import {
  StyledForm,
  StyledWrapper,
  StyledTitle,
  StyledInputTitle,
  StyledInput,
  StyledLabel,
  StyledButton,
} from "./LoginStyle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
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
        {!isPending ? (
          <StyledButton>Login</StyledButton>
        ) : (
          <StyledButton>Loading...</StyledButton>
        )}
        {error && <p>{error}</p>}
      </StyledForm>
    </StyledWrapper>
  );
}

export default Login;
