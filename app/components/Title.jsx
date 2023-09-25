const Title = ({ description }) => {
  const words = description.split(" ");

  return (
    <>
      <h2 className="text-center text-4xl uppercase  font-bold pb-10 ">
        <span className="text-yellow-300">{words[0]}</span> {words[1]}
      </h2>
    </>
  );
};
export default Title;
