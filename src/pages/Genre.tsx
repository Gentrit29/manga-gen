import { useParams } from "react-router";

function Genre() {
  const { id } = useParams();
  return (
    <div className="mt-10 flex justify-center text-5xl text-white">{id}</div>
  );
}

export default Genre;
