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
