export const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`please check your ${selection} is correctley typed`);
};
