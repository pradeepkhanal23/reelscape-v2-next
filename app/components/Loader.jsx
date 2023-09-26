const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center  justify-center z-[9999]  w-screen h-screen bg-black z-60 bg-opacity-70">
      <iframe
        src="https://giphy.com/embed/eYwDrm9suCZzy"
        className="w-full h-full"
        frameBorder={0}
        class="giphy-embed"
        allowFullScreen
      />
    </div>
  );
};
export default Loader;
