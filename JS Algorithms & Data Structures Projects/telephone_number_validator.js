function telephoneCheck(str) {
  // Using a regex pattern to match the given US phone number formats
  let pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  // Returns true if the str matches the pattern, otherwise false
  return pattern.test(str);
}

/*
Explanation:

let pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/:

  ^: Start of the string
  (1\s?)?: Matches an optional "1" and an optional whitespace character
  (\(\d{3}\)|\d{3}): Matches either 3 digits inside parentheses or 3 digits without parentheses
  [\s\-]?: Matches an optional whitespace or dash character
  \d{3}[\s\-]?\d{4}: Matches 3 digits and an optional whitespace or dash character, followed by 4 digits
  $: End of the string
  
return pattern.test(str): Returns a boolean value indicating whether the string str matches the pattern.
*/

telephoneCheck("555-555-5555");

