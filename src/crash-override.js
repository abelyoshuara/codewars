function aliasGen(first, last) {
  let firstKey = first[0].toUpperCase();
  let lastKey = last[0].toUpperCase();

  if (/^[A-Z]$/.test(firstKey) && /^[A-Z]$/.test(lastKey)) {
    return firstName[firstKey] + " " + surname[lastKey];
  }

  return "Your name must start with a letter from A - Z.";
}

console.log(aliasGen("Mike", "Millington"), "Malware Mike");
console.log(aliasGen("Fahima", "Tash"), "Function T-Rex");
console.log(aliasGen("Daisy", "Petrovic"), "Data Payload");
console.log(
  aliasGen("7393424", "Anumbha"),
  "Your name must start with a letter from A - Z.",
);
console.log(
  aliasGen("Anuddanumbha", "23200"),
  "Your name must start with a letter from A - Z.",
);
