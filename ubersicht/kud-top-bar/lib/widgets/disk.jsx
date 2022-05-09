import { React, run } from "uebersicht";

const command = "df -H -l / | awk 'NR==2 {print $4\" / \"$2}'";

const diskIntervalFn = async (setDiskUsage) => {
  const result = await run(command);
  setDiskUsage(result);
};

const Disk = () => {
  const [diskUsage, setDiskUsage] = React.useState("");

  React.useEffect(() => {
    diskIntervalFn(setDiskUsage);

    const diskInterval = setInterval(() => diskIntervalFn(setDiskUsage), 60000);

    return () => clearInterval(diskInterval);
  }, []);

  return (
    <div className="flex items-center px-2">
      <div className="mr-1">{diskUsage}</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
        <path d="M464 288h-416C21.5 288 0 309.5 0 336v96C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-96C512 309.5 490.5 288 464 288zM320 416c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S337.6 416 320 416zM416 416c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S433.6 416 416 416zM464 32h-416C21.5 32 0 53.5 0 80v192.4C13.41 262.3 29.92 256 48 256h416c18.08 0 34.59 6.254 48 16.41V80C512 53.5 490.5 32 464 32z" />
      </svg>
    </div>
  );
};

export default Disk;
