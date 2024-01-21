import { Input } from "@nextui-org/react";
import { useEffect, useRef } from "react";

export default function UseRefPlaceholder() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log(inputRef.current?.value);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="w-1/3">
      <h3></h3>
      <Input ref={inputRef} type="username" label="username" />
    </div>
  );
}
