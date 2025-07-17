const returnOwner = (data) => {
  return data?.[0]?.Owner || "No data found";
};
export { returnOwner };
