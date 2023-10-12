export const findDataByIndex = (indexToFind, mainArray) => {
  const data = mainArray.find((item, index) => index === indexToFind);
  return data;
};
