import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 className="text-red-600">HI i'm Home page!</h1>
      <div className="flex w-1/2 justify-around">
        <div className="">
          <Link to="/Books/1">Book1</Link>
        </div>
        <div>
          <Link to="/Books/2">Book2</Link>
        </div>
      </div>
    </>
  );
}
