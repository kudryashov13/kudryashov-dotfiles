const parseJSON = (jsonString) => {
  let data = {};

  try {
    data = JSON.parse(jsonString);
  } catch (error) {
    console.log(error);
  } finally {
    return data;
  }
};

const getYabaiData = (output) => {
  return parseJSON(output) || {};
};

const getActiveSpaceWindows = ({ spaces, windows }) => {
  const space = spaces.find((space) => space["has-focus"]);
  const spaceWindows = windows.filter((window) => space.windows.some((id) => id === window.id));
  const activeWindow = spaceWindows.find((window) => window["has-focus"]);

  if (activeWindow) {
    const maxLength = 100;
    // const title =
    //   activeWindow.title.length > maxLength ? activeWindow.title.slice(0, maxLength) + "..." : activeWindow.title;
    return activeWindow.app;
  }

  return "";
};

export { getYabaiData, getActiveSpaceWindows };
