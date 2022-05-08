import { React } from "uebersicht";

import { currentDate } from "../utils/date";
import { MINUTE } from "../utils/constants";

const Time = () => {
  const [date, setDate] = React.useState(currentDate());

  React.useEffect(() => {
    const updateDateInterval = setInterval(() => setDate(currentDate()), MINUTE);

    return () => clearInterval(updateDateInterval);
  }, []);

  return <span>{date}</span>;
};

export default Time;
