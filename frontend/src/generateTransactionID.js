export const generateTransactionID = () => {
  const randomString = Math.random().toString(36).substring(2, 10);
  const timestamp = Date.now();
  const transactionID = `${timestamp}-${randomString}`;

  return transactionID;
};
