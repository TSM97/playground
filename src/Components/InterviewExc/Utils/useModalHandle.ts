import { useState } from "react";

type modalHandleType = {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
};

export default function useModalHandle(): modalHandleType {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal(): void {
    setIsOpen(false);
  }

  function openModal(): void {
    setIsOpen(true);
    console.log(isOpen);
  }
  console.log("sto hook" + isOpen);

  return { isOpen, closeModal, openModal };
}
