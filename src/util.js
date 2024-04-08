export const uniqueKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};
