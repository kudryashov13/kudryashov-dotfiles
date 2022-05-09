import Cpu from "./lib/widgets/cpu.jsx";
import Ram from "./lib/widgets/ram.jsx";
import Disk from "./lib/widgets/disk.jsx";

import { resetStyles } from "./lib/utils/reset";

resetStyles();

const refreshFrequency = false;

const render = () => {
  return (
    <div className="w-screen flex items-center justify-end px-5 py-1 text-sm bg-purple-50 bg-opacity-40 backdrop-blur-3xl">
      <Cpu />
      <Ram />
      <Disk />
    </div>
  );
};

export { refreshFrequency, render };
