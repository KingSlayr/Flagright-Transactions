export const buildURLWithFilters = (baseURL, filters, page = 1) => {
  const url = new URL(baseURL);
  for (const key in filters) {
    if (filters.hasOwnProperty(key)) {
      const value = filters[key];
      url.searchParams.append(key, value);
    }
  }
  url.searchParams.append("page", page);
  return url.toString();
};

// The `buildURLWithFilters` function constructs a URL with query parameters based on a provided base URL, 
// filters, and an optional page number. It does this by:
// - Creating a new URL object using the base URL.
// - Iterating through the filters object and appending each key-value pair as a query parameter to the URL.
// - Adding the `page` query parameter with the specified page number (defaulting to 1).
// - Returning the URL as a string with the applied query parameters. This function is useful for dynamically building URLs with filtering and pagination options.
