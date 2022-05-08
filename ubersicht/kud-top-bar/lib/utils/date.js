const currentDate = () =>
  new Date().toLocaleString("en-RU", {
    weekday: "short",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export { currentDate };
