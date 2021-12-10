import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
import PhotoList from "../../components/photoList/PhotoList";

//firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "./../../firebase/config";
//Styles
import {
  StyledWrapper,
  StyledInfo,
  StyledUserContainer,
  StyledUserAvatar,
  StyledUsername,
  StyledPhotoContainer,
} from "./UserProfileStyle";

//text
import { pageText } from "../../PageText/PageText";

const USERS_COLLECTION = "users";
const PHOTOS_COLLECTION = "photos";

function UserProfile() {
  let { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const usersRef = query(
      collection(database, USERS_COLLECTION),
      where("uid", "==", id)
    );
    const photosRef = query(
      collection(database, PHOTOS_COLLECTION),
      where("createdBy.id", "==", id)
    );

    Promise.all([getDocs(usersRef), getDocs(photosRef)]).then(
      ([users, photos]) => {
        let userData;
        let photosData = [];

        users.forEach((user) => {
          userData = user.data();
        });

        photos.forEach((photo) => {
          photosData.push({ ...photo.data(), id: photo.id });
        });

        if (!userData) return;
        setData({ user: userData, photos: photosData });
      }
    );
  }, [id]);

  if (!data) return <div>{pageText.UserProfile.loading}</div>;
  return (
    <StyledWrapper>
      <StyledUserContainer>
        <StyledUserAvatar src={data.user.photoURL} alt={data.user.uid} />
        <StyledUsername>{data.user.displayName}</StyledUsername>
      </StyledUserContainer>
      <StyledPhotoContainer>
        {data.photos.length < 1 && (
          <StyledInfo>{pageText.UserProfile.profileMsg}</StyledInfo>
        )}
        <PhotoList document={data.photos} />
      </StyledPhotoContainer>
    </StyledWrapper>
  );
}

export default UserProfile;
