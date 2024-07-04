export const formatDate = (date) => {
  if (/^\d{8}$/.test(date)) {
    const year = parseInt(date.substring(0, 4), 10);
    const month = parseInt(date.substring(4, 6), 10) - 1;
    const day = parseInt(date.substring(6), 10);

    return new Date(year, month, day);
  }
  return null;
};
