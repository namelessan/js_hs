const sumNonNeighbors = function maxSum(arr) {
  if (arr.length === 0) return 0;
  if (arr.length > 0 && arr.length <= 2) return Math.max(...arr);

  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] + maxSum(arr.slice(i + 2, arr.length)));
  }

  return Math.max(...res);
};

module.exports = sumNonNeighbors;

console.log(sumNonNeighbors([])); // $> 0

console.log(sumNonNeighbors([5])); // $> 5

console.log(sumNonNeighbors([1, 9, 7, 4])); // $> 13

console.log(sumNonNeighbors([8, 2, 3, 9, 6, 5])); // $> 22

console.log(sumNonNeighbors([2, 3, 6, 8, 11, 14, 14, 22, 26, 29, 29, 30])); // $> 106

console.log(sumNonNeighbors([3, 7, 8, 11, 12, 18, 23, 26])); // $> 62

console.log(sumNonNeighbors([4, 4, 5, 1, 7, 7, 28, 13, 23, 14, 4, 10, 28])); // $> 99

console.log(
  sumNonNeighbors([18, 16, 14, 13, 26, 12, 11, 18, 4, 11, 25, 12, 13, 11])
); // $> 114

console.log(sumNonNeighbors([25, 23, 27, 24, 25, 23, 4, 11, 5, 29, 4, 9])); // $> 126

console.log(sumNonNeighbors([4, 16, 21, 20, 9, 6, 22, 2, 21, 20, 26, 4])); // $> 105

console.log(sumNonNeighbors([5, 5, 4, 5, 16, 4, 13, 9, 1, 8, 11, 9, 9, 16])); // $> 71
