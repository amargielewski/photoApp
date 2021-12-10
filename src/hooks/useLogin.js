import { useState } from "react";

//context
import { useAuthContext } from "./useAuthContext";

//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

function useLogin() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });

        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        setError("Wrong email address or password");
        setIsPending(false);
      });
  };

  return { login, isPending, error };
}

export default useLogin;
