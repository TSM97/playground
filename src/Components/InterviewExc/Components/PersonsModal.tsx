export default function PersonsModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  console.log("sto modal" + isOpen);

  if (!isOpen) return null;

  return (
    <section className="">
      <div>Modal</div>
      <div>Modal</div>
      <button onClick={closeModal}>button</button>
    </section>
  );
}
