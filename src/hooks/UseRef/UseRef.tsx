import { Button } from "@nextui-org/react";
import { useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    //? Why this console.log shows State: 0 and Ref: 1 on first increment
    //! State updates are triggeing a new render of the component and the updated value is accessible only in the new render.
    //! So React finishes all the work and then re-renders - first console.log and then re-renders
    console.log("State: " + count);
    //! useRef doesnt trigger a new render but can read the new value
    console.log("Ref: " + countRef.current);
  };
  return (
    <div className="text-center">
      <h3 className="text-blue-400">Count: {count}</h3>
      <Button onClick={handleIncrement}>Increment useRef Tut</Button>
    </div>
  );
}
