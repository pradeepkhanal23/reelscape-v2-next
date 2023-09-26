const DisplayOutputSkeleton = ({ results }) => {
  return (
    <div className="container">
      {results &&
        results.map((item) => (
          <div
            key={item.id}
            className="h-96 w-full bg-gray-600 animate-pulse rounded-lg"
          />
        ))}
    </div>
  );
};
export default DisplayOutputSkeleton;
