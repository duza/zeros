module.exports = function getZerosCount(number) {
  let result = 0;
  let n = number;
  while (n > 0) {
    n /= 5;
    result += Math.floor(n);
  }
  return result;
}

