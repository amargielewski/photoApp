//context
import { useAuthContext } from "../hooks/useAuthContext";
//firebase
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useState } from "react";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { logout, error };
};
