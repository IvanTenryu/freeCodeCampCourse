function rot13(str) {
  // Resulting decoded string
  let decoded = '';
  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
      // Get the character code of the current character
      let charCode = str.charCodeAt(i);
      // Check if the character code is outside of the range of uppercase letters (A-Z)
      if (charCode < 65 || charCode > 90) {
          // If outside the range, add the character to the decoded string without transforming it
          decoded += str[i];
      } else if (charCode < 78) {
          // If the character code is less than 78, it is in the first half of the uppercase letters (A-M), so add 13 to shift it to the equivalent character in the second half (N-Z)
          decoded += String.fromCharCode(charCode + 13);
      } else {
          // If the character code is greater than or equal to 78, it is in the second half of the uppercase letters (N-Z), so subtract 13 to shift it to the equivalent character in the first half (A-M)
          decoded += String.fromCharCode(charCode - 13);
      }
  }
  return decoded;
}