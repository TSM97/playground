import { useMemo, useState } from "react";

import { Button, Textarea } from "@nextui-org/react";
import { items } from "./utils";
export default function UseMemo() {
  const [count, setCount] = useState<number>(0);
  const [array] = useState<typeof items>(items);

  //! on every click, component rerenders.selectedItem searches for a value existance in a -- static array that doesnt change--
  //! so that does not effect our component
  //! and doesnt need to rerender.So this causes performance issues!!
  //* useMemo prevents rerendering of selectedItem when item from the dependency array stays the same
  const selectedItem = useMemo(
    () => array.find((item) => item.isSelected),
    [array]
  );

  //* useCallback hook acts the same as useMemo but instead of memoize the result of a computation
  //* memoize functions so that they are not recreated on every render. This is useful when passing callbacks to child components to avoid unnecessary re-renders.

  return (
    <>
      <Button color="primary" onClick={() => setCount(count + 1)}>
        press me!
      </Button>
      <div>{selectedItem?.id}</div>
      <Textarea
        label="Description"
        placeholder="Enter your description"
        className="max-w-xs d-flex justify-center"
        value={count.toString()}
      />
    </>
  );
}
