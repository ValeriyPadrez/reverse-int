module.exports = function reverse(n) {
  const sign = n < 0 ? -1 : 1;
  const reversedString = Math.abs(n).toString().split('').reverse().join('');
  return sign * Number(reversedString);
};
