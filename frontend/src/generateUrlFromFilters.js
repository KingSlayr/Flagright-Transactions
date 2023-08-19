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
