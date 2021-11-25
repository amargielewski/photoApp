import PhotoList from "../components/photoList/PhotoList";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { documents } = useCollection("photos");

  console.log(documents);
  return <div>{documents && <PhotoList document={documents} />}</div>;
}

export default Home;
