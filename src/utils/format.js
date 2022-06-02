export const formatDate = (_date) => {
  if (!_date) return undefined;
  const date = new Date(_date);
  return date.toISOString().slice(0, -14);
};
