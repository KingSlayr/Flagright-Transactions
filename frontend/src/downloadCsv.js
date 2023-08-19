export const downloadCSV = (jsonData) => {
  // Function to convert an object to CSV row
  const objectToCSVRow = (obj) => {
    const values = Object.values(obj);
    const escapedValues = values.map((value) =>
      typeof value === "string" ? `"${value}"` : value
    );
    return escapedValues.join(",");
  };

  // Convert each object to a CSV row
  const csvData = jsonData.map(objectToCSVRow);

  // Add header row with property names
  const headerRow = Object.keys(jsonData[0]);
  csvData.unshift(headerRow.join(","));

  // Create a CSV string
  const csvString = csvData.join("\n");

  // Create a Blob object with the CSV data
  const blob = new Blob([csvString], { type: "text/csv" });

  // Create a download link and trigger the download
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

// The `downloadCSV` function takes an array of JSON objects, converts them into a CSV format, and
// initiates a download. It does this by:
// - Mapping each JSON object to a CSV row.
// - Adding a header row with property names.
// - Creating a CSV string by joining rows with line breaks.
// - Creating a Blob object with the CSV data.
// - Creating a download link, triggering the download, and then removing the link. This function simplifies the process of exporting JSON data as a CSV file for user download.
