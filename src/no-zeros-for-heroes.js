function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");

  /*
  if (n === 0) return n;

  const arr = n.toString().split("");
  const arrNew = [];

  let i;
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== "0" || arr[i + 1] !== "0") {
      arrNew.push(arr[i]);
    }
  }

  if (arr[i] !== "0") {
    arrNew.push(arr[i]);
  }

  return Number(arrNew.join(""));
  */
}

console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(-105), -105);
console.log(noBoringZeros(0), 0);
