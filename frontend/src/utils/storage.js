export const saveTransactions = (transactions) => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

// Get transactions from localStorage
export const getTransactions = () => {
  const data = localStorage.getItem("transactions");
  return data ? JSON.parse(data) : [];
};
