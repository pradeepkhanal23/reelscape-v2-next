const DisplayOutputSkeleton = ({ results }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-[1600px] mx-auto">
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
