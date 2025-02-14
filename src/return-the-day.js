function whatday(num) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return num < 1 || num > 7
    ? "Wrong, please enter a number between 1 and 7"
    : weekday[num - 1];
}

console.log(whatday(1), "Sunday");
console.log(whatday(2), "Monday");
console.log(whatday(3), "Tuesday");
console.log(whatday(8), "Wrong, please enter a number between 1 and 7");
console.log(whatday(20), "Wrong, please enter a number between 1 and 7");
