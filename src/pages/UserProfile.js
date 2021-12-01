import styled from "styled-components";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "@firebase/firestore";
import { database } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import PhotoList from "../components/photoList/PhotoList";

function UserProfile() {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [data, setData] = useState(null);

  const { documents } = useCollection("photos", ["createdBy.id", "==", id]);

  console.log(documents);
  return (
    <div>
      <PhotoList document={documents} />
    </div>
  );
}

export default UserProfile;
