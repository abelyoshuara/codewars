function sumMul(n, m) {
  if (n >= m) return "INVALID";

  return Array(m)
    .fill(1)
    .map((val, index) => (val + index) * n)
    .filter((val) => val < m)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(sumMul(0, 0));
console.log(sumMul(2, 9));
console.log(sumMul(3, 13));
console.log(sumMul(4, 123));
console.log(sumMul(4, -7));
console.log(sumMul(37, 3959));
