const Modal = ({ setModalOpen, modalOpen, message, title }) => {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-slate-900  z-1000 ">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 w-[90%] max-w-md z-1000 mx-auto bg-white text-black rounded-md shadow-lg p-4">
        <h2 className="text-center text-lg font-bold">{title}</h2>
        <p className="text-center mt-2">{message}</p>
        <div className="flex justify-center mt-4">
          <button
            className="bg-black text-white px-8 py-1 rounded-md"
            onClick={() => setModalOpen(!modalOpen)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
