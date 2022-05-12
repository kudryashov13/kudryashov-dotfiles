const Space = ({ space }) => {
  return (
    <div
      className={`transition duration-150 ease-in-out w-[1.5em] h-[1.5em] flex items-center
      justify-center mr-1 rounded-sm relative ${space["has-focus"] ? "bg-slate-900" : "bg-slate-700"}`}
    >
      {space.index}
      <div className="absolute -top-[12px] right-0">
        {new Array(space.display).fill(".").map((dot, index) => (
          <span key={index}>{dot}</span>
        ))}
      </div>
    </div>
  );
};

export default Space;
