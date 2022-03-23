export const formatToCurrency = (input: number): string => {
  return input
    .toString()
    .split("")
    .reverse()
    .map((el, index) => {
      if (index % 3 === 0 && index !== 0) return (el += ",");
      return el;
    })
    .reverse()
    .join("");
};
