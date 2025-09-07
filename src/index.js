module.exports = function reverse(n) {
  const reversedString = Math.abs(n).toString().split('').reverse().join('');
  return Number(reversedString);
};
