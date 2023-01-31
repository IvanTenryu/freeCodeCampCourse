function convertToRoman(num) {
  // Map of roman numerals and their corresponding values
  const romanMap = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
  };
  
  let roman = '';
  // Loop through each roman numeral and add it to the result string while the value of `num` is greater or equal to the value of the roman numeral
  for (let key in romanMap) {
      while (num >= romanMap[key]) {
          roman += key;
          num -= romanMap[key];
      }
  }
  
  return roman;
}