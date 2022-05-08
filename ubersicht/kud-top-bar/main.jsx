import Spaces from "./lib/widgets/spaces.jsx";

import { getYabaiData } from "./lib/utils/yabai";
import { resetStyles } from "./lib/utils/reset";

resetStyles();

const command = "bash ./kud-top-bar/init.sh";

const refreshFrequency = false;

const render = ({ output }) => {
  const { spaces, displays, windows } = getYabaiData(output);
  const space = spaces.find((space) => space["has-focus"]);
  const spaceWindows = windows
    .filter((window) => space.windows.some((id) => id === window.id))
    .sort((a, b) => a.id - b.id);
  console.log("spaceWindows :>> ", spaceWindows);

  return (
    <section className="bg-white bg-opacity-40 backdrop-blur-xl flex items-center w-screen text-black text-sm py-1 px-5">
      <Spaces spaces={spaces} displays={displays} />
      {spaceWindows.map((window) => (
        <span
          className={`transition duration-150 ease-in-out mx-1 px-2 rounded-sm ${
            window["has-focus"] && "bg-blue-600 text-white"
          }`}
        >
          {window.app}
        </span>
      ))}
    </section>
  );
};

export { command, refreshFrequency, render };
