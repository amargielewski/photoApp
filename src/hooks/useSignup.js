import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
//firebase imports
import { auth, fbStorage, database } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, name, avatar) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      //upload user Avatar

      const uploadPath = `/avatars/${res.user.uid}/${avatar.name}`;

      const imageRef = ref(fbStorage, uploadPath);

      await uploadBytes(imageRef, avatar);

      const getUrl = await getDownloadURL(imageRef).then((url) => {
        return url;
      });

      const currentUser = await getAuth();

      await updateProfile(currentUser.currentUser, {
        photoURL: getUrl,
        displayName: name,
      });
      // create a user documment

      const userRef = await collection(database, "users");

      await addDoc(userRef, {
        displayName: name,
        photoURL: getUrl,
      });

      //dispatch login action

      dispatch({ type: "LOGIN", payload: res.user });
    } catch (err) {
      console.log(err);
    }
  };
  return { signup, error, isPending };
};
