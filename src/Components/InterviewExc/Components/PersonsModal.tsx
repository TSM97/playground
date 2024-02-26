export default function PersonsModal({
  isOpen,
  closeModal,
  modalData,
}: {
  isOpen: boolean;
  closeModal: () => void;
  modalData: unknown;
}) {
  console.log("sto modal" + isOpen);
  console.log("person sto modal" + modalData);

  if (!isOpen || !modalData) return null;

  return (
    <section className="absolute top-[50%] bottom-[50%]">
      <div>{modalData.name.title}</div>
      <div>{modalData.email}</div>
      <button onClick={closeModal}>button</button>
    </section>
  );
}
