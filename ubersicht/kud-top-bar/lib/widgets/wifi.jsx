import { React, run } from "uebersicht";
import { MINUTE } from "../utils/constants";

const getWifi = async () => {
  const wifi = await run(
    "/System/Library/PrivateFrameworks/Apple80211.framework/" +
      "Versions/Current/Resources/airport -I | " +
      'sed -e "s/^ *SSID: //p" -e d'
  );

  const strength = await run(
    "/System/Library/PrivateFrameworks/Apple80211.framework/" +
      "Versions/Current/Resources/airport -I | " +
      'sed -e "s/^ *agrCtlRSSI: //p" -e d'
  );

  return { wifi, strength };
};

const Wifi = () => {
  const [wifi, setWifi] = React.useState(null);
  const [strength, setStrength] = React.useState(null);

  const formattedStrength = React.useMemo(() => {
    if (strength > -50) {
      return "Strong";
    }
    if (strength > -80) {
      return "Normal";
    }
    return "Weak";
  }, [strength]);

  React.useEffect(() => {
    getWifi().then(({ wifi, strength }) => {
      setWifi(wifi);
      setStrength(strength);
    });

    const getWifiInterval = setInterval(async () => {
      const { wifi, strength } = await getWifi();
      setWifi(wifi);
      setStrength(strength);
    }, MINUTE);

    return () => clearInterval(getWifiInterval);
  }, []);

  return (
    <span>
      {formattedStrength} - {wifi}
    </span>
  );
};

export default Wifi;
