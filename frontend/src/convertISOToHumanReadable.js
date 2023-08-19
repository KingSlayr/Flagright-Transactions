export const convertISOToHumanReadable = (isoDateString) => {
  const isoDate = new Date(isoDateString);

  // Define the date and time formatting options
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  // Convert the ISO date to a human-readable format
  const humanReadableDate = isoDate.toLocaleDateString("en-US", options);

  return humanReadableDate;
};
