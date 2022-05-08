import { React, run } from "uebersicht";

// 0-20 red
// 20-40 orange
// 40-60 yellow
// 60-80 ?
// 80-100 green

// const colors = {};

const Battery = () => {
  const [percentage, setPercentage] = React.useState(0);
  const percentageFormatted = React.useMemo(() => String(percentage).trim() + "%", [percentage]);

  React.useEffect(() => {
    const getPercentage = async () => {
      const percentage = await run(`pmset -g batt | egrep '([0-9]+%).*' -o | cut -f1 -d'%'`);
      setPercentage(percentage);
    };
    getPercentage();
  }, []);

  return <span>{percentageFormatted}</span>;
};

export default Battery;
