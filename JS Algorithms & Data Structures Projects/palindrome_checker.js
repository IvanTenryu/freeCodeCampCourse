function isPalindrome(inputString) {
  // Convert the input string to lowercase and remove all non-alphanumeric characters using a regular expression
  inputString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Check if the input string is equal to its reverse
  return inputString === inputString.split('').reverse().join('');
}