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
  StyledError,
} from "./LoginStyle";

import { useForm } from "react-hook-form";

function Login() {
  const { login, isPending, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    console.log(email, password);

    await login(email, password);
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle> {pageText.Login.title}</StyledTitle>
        <StyledLabel>
          <StyledInputTitle>{pageText.Login.email}</StyledInputTitle>
          <StyledInput
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <StyledError>{pageText.Login.emailRequired}</StyledError>
          )}
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>{pageText.Login.password}</StyledInputTitle>
          <StyledInput
            type="password"
            autoComplete="off"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <StyledError>{pageText.Login.passwordRequired}</StyledError>
          )}
        </StyledLabel>
        {!isPending ? (
          <StyledButton>{pageText.Login.loginBtn}</StyledButton>
        ) : (
          <StyledButton>{pageText.Login.loadingBtn}</StyledButton>
        )}
        {error && <StyledError>{error}</StyledError>}
      </StyledForm>
    </StyledWrapper>
  );
}

export default Login;
