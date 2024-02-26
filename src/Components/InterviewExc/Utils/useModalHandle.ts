import { useState } from "react";

type modalHandleType = {
  isOpen: boolean;
  modalData?: unknown;
  closeModal: () => void;
  openModal: () => void;
  setData?: (data: unknown) => void;
};

export default function useModalHandle(): modalHandleType {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<unknown | null>(null);

  function closeModal(): void {
    setIsOpen(false);
  }

  function openModal(): void {
    setIsOpen(true);
    console.log(isOpen);
  }

  // if Modal needs data to be passed
  function setData(data: unknown): void {
    setModalData(data);
    console.log(isOpen);
  }
  console.log("sto hook" + isOpen);

  return { isOpen, modalData, closeModal, openModal, setData };
}
