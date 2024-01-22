import { useParams } from "react-router-dom";

export default function Books() {
  const { id } = useParams<string>();
  return (
    <section className="w-full">
      <h1 className="text-blue-500">Books {id}</h1>
    </section>
  );
}
