import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase/config";
import { useEffect, useState } from "react";

function PhotoDetails() {
  const [data, setData] = useState(null);
  const { id: photoID } = useParams();

  useEffect(() => {
    const docRef = doc(database, "photos", photoID);
    const docSnap = getDoc(docRef).then((doc) => {
      setData(doc.data());
    });
  }, [photoID]);

  if (!data) return <div>Waiting for Data</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Create by :{data.createdBy.displayName}</p>
    </div>
  );
}

export default PhotoDetails;
