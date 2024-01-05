export const DateTime = () => {
  const date = new Date();

  const myDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
  })
    .format(date)
    .replace(/,/g, "");

  return <div>{myDate}</div>;
};
