// complete the given function
function palindrome(str) {
  // Convert the input string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the cleaned string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = palindrome;
