const invoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15];

const splitArrayToChunks = (arr, chunksLength) => {
  const newArr = [...arr];
  const newArrayLength = Math.floor(arr.length / chunksLength);
  const firstArr = arr.slice(0, newArrayLength);
  const secondArr = arr.slice(newArrayLength, newArrayLength * 2);
  const thirdArr = arr.slice(newArrayLength * 2, arr.length);

  return [firstArr, secondArr, thirdArr];
};

console.log(splitArrayToChunks(invoices, 5));
