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
    <section data-modal-backdrop="static" className="fixed top-0 bottom-[50%]">
      <div className="w-[100vw] h-[100vh] backdrop-blur-xl backdrop-opacity-80 flex justify-center items-center">
        <div className="min-w-[20%] bg-gray-100 border-2 border-gray-400 rounded-lg">
          <div className="flex flex-col gap-y-3 p-unit-lg">
            <div className="flex justify-between border-b-2 pb-2 border-b-gray-300">
              <div>
                <span>{modalData.name.title} </span>
                <span>{modalData.name.first} </span>
                <span>{modalData.name.last}</span>
              </div>
              <div>{modalData.gender}</div>
            </div>
            <div className="flex justify-between">
              <div className="font-bold">Email:</div>
              <div> {modalData.email}</div>
            </div>
            <div className="flex justify-between">
              <div className="font-bold">Phones:</div>
              <div> {modalData.phone}</div>
            </div>
            <div className="flex justify-center ">
              <button
                className="text-white w-1/3 bg-orange-400"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
