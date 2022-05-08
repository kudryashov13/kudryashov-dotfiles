const Space = ({ space }) => {
  return (
    <div
      className={`transition duration-150 ease-in-out w-[1.5em] h-[1.5em] flex items-center
      justify-center mr-1 rounded-sm relative ${space["has-focus"] ? "bg-blue-600" : "bg-blue-900"}`}
    >
      {space.index}
      <div className="absolute -top-[12px] right-0">
        {new Array(space.display).fill(".").map((dot) => (
          <span>{dot}</span>
        ))}
      </div>
    </div>
  );
};

export default Space;