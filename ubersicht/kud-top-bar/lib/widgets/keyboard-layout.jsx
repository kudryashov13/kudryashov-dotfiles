import { React, run } from "uebersicht";
import { SECOND } from "../utils/constants";

const keyboardLayoutMap = {
  "U.S.": "English",
  RussianWin: "Russian",
};

const getLayout = () => {
  return run(
    "defaults read ~/Library/Preferences/com.apple.HIToolbox.plist AppleSelectedInputSources | egrep -w 'KeyboardLayout Name' | sed -E 's/^.+ = \"?([^\"]+)\"?;$/\\1/'"
  );
};

const KeyboardLayout = () => {
  const [layout, setLayout] = React.useState(null);
  const layoutFriendly = React.useMemo(() => layout && keyboardLayoutMap[layout.trim()], [layout]);

  React.useEffect(() => {
    getLayout().then((layout) => setLayout(layout));

    const getLayoutInterval = setInterval(async () => {
      const layout = await getLayout();
      setLayout(layout);
    }, SECOND);

    return () => clearInterval(getLayoutInterval);
  }, []);

  return <span>{layoutFriendly}</span>;
};

export default KeyboardLayout;
