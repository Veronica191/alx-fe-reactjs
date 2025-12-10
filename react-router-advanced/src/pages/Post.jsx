import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams(); // dynamic param
  return <h3>Viewing post ID: {postId}</h3>;
}
