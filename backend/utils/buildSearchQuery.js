import {
  convertDateToEndOfDay,
  convertDateToStartOfDay,
} from "../utils/convertDate.js";
const buildSearchQuery = (searchCriteria) => {
  const query = {};

  if (searchCriteria.minAmount) {
    query.amount = { $gte: parseFloat(searchCriteria.minAmount) };
  }
  if (searchCriteria.maxAmount) {
    query.amount = { 
      ...query.amount,
      $lte: parseFloat(searchCriteria.maxAmount) 
    };
  }
  if (searchCriteria.startDate) {
    query.dateTime = {
      $gte: new Date(convertDateToStartOfDay(searchCriteria.startDate)),
    };
  }
  if (searchCriteria.endDate) {
    query.dateTime = {
      ...query.dateTime,
      $lte: new Date(convertDateToEndOfDay(searchCriteria.endDate)),
    };
  }
  if (searchCriteria.description) {
    query.description = { $regex: searchCriteria.description, $options: "i" };
  }
  return query;
};

export default buildSearchQuery;
