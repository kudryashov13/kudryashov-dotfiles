import { React } from "uebersicht";
import Space from "../components/space.jsx";

const SpacesList = ({ spaces, displays }) => {
  const displaysWithSpaces = displays.map((display) => {
    const dsp = spaces.filter((space) => display.spaces.some((spi) => spi === space.index));
    return {
      ...display,
      spaces: dsp,
    };
  });

  return (
    <div className="flex text-white">
      {displaysWithSpaces.map((display) => (
        <div key={display.id}>
          <div className="flex">
            {display.spaces.map((space) => (
              <Space key={space.uuid} space={space} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpacesList;
