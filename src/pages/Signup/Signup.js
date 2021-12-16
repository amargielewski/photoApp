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
  StyledError,
} from "./SignupStyle";

//text
import { pageText } from "../../PageText/PageText";

//React-hook-form
import { useForm } from "react-hook-form";
function Signup() {
  const { signup, isPending, error } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password, name, avatar }) => {
    await signup(email, password, name, avatar[0]);
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle>{pageText.signup.title}</StyledTitle>
        <StyledLabel>
          <StyledInputTitle>{pageText.signup.email}</StyledInputTitle>
          <StyledInput
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <StyledError>{pageText.signup.emailRequired}</StyledError>
          )}
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>{pageText.signup.password}</StyledInputTitle>
          <StyledInput
            type="password"
            {...register("password", { required: true })}
            autoComplete="off"
          />
          {errors.password?.type === "required" && (
            <StyledError>{pageText.signup.passwordRequired}</StyledError>
          )}
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>{pageText.signup.displayName}</StyledInputTitle>
          <StyledInput
            type="text"
            {...register("name", { required: true, maxLength: 12 })}
          />
          {errors.name?.type === "required" && (
            <StyledError>{pageText.signup.nameRequired}</StyledError>
          )}
          {errors.name?.type === "maxLength" && (
            <StyledError>{pageText.signup.nameLength}</StyledError>
          )}
        </StyledLabel>
        <StyledLabel>
          <StyledInputTitle>{pageText.signup.avatar}</StyledInputTitle>
          <StyledInput
            type="file"
            {...register("avatar", {
              required: true,
              validate: {
                lessThanSize: (files) => files[0]?.size < 50000000,
                includesImage: (files) => files[0].type.includes("image"),
              },
            })}
          />
          {errors.avatar?.type === "includesImage" && (
            <StyledError>File must be a Image</StyledError>
          )}
          {errors.avatar?.type === "lessThanSize" && (
            <StyledError>no Bigger than</StyledError>
          )}
        </StyledLabel>
        {!isPending ? (
          <StyledButton>{pageText.signup.signupBtn}</StyledButton>
        ) : (
          <StyledButton>{pageText.signup.loadingBtn}</StyledButton>
        )}

        {error && <div>{error}</div>}
      </StyledForm>
    </StyledWrapper>
  );
}

export default Signup;
