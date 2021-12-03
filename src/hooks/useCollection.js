import { useState, useEffect, useRef } from "react";
import { database } from "../firebase/config";

//firebase imports
import { onSnapshot, collection, query, where } from "firebase/firestore";

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  //setup query

  const q = useRef(_q).current;

  useEffect(() => {
    setError(null);
    let ref = collection(database, c);

    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];

        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
      },
      (error) => {
        console.log(error);
        setError(error.message);
      }
    );

    setError(null);

    return () => unsub();
  }, [c, q]);

  return { documents, error };
};
