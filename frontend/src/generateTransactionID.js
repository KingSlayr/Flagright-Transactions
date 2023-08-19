export const generateTransactionID = () => {
  const randomString = Math.random().toString(36).substring(2, 10);
  const timestamp = Date.now();
  const transactionID = `${timestamp}-${randomString}`;

  return transactionID;
};


// The `generateTransactionID` function creates a unique transaction ID by combining a 
// random string and a timestamp. It generates a random alphanumeric string, extracts a
//  portion of it, and appends the current timestamp to it. This results in a unique identifier 
//  for a transaction.