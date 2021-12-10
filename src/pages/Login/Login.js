import { useState } from "react";
//text
import { pageText } from "../../PageText/PageText";
//hooks
import useLogin from "../../hooks/useLogin";
//styles
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
        <StyledTitle> {pageText.Login.title}</StyledTitle>
        <StyledLabel>
          <StyledInputTitle>{pageText.Login.email}</StyledInputTitle>
          <StyledInput
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>{pageText.Login.password}</StyledInputTitle>
          <StyledInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </StyledLabel>
        {!isPending ? (
          <StyledButton>{pageText.Login.loginBtn}</StyledButton>
        ) : (
          <StyledButton>{pageText.Login.loadingBtn}</StyledButton>
        )}
        {error && <p>{error}</p>}
      </StyledForm>
    </StyledWrapper>
  );
}

export default Login;
