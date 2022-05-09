import Spaces from "./lib/widgets/spaces-list.jsx";

import { getYabaiData } from "./lib/utils/yabai";

const command = "bash ./kud-top-bar/init.sh";

const refreshFrequency = false;

const render = ({ output }) => {
  const { spaces, displays, windows } = getYabaiData(output);

  const space = spaces.find((space) => space["has-focus"]);
  const spaceWindows = windows
    .filter((window) => space.windows.some((id) => id === window.id))
    .sort((a, b) => a.pid - b.pid);

  return (
    <div className="flex items-center px-5 py-1 text-sm">
      <Spaces spaces={spaces} displays={displays} />
      {spaceWindows.map((window) => (
        <span
          key={window.id}
          className={`transition duration-150 ease-in-out mx-1 px-2 rounded-sm ${
            window["has-focus"] && "bg-blue-600 text-white"
          }`}
        >
          {window.app}
        </span>
      ))}
    </div>
  );
};

export { command, refreshFrequency, render };
