export const DateTime = () => {
  const date = new Date();
  // format to Tue 2 Jan 18:36 with intl

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
