// Snack 1
function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter((str) => str !== " ");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

// Snack 2 first, Snack 4 now
function createSlug(str) {
  return str.toLowerCase().replaceAll(" ", "-");
}

// Snack 3
function average(array) {
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
}

function isPalindrome(str) {
  const strReversed = str.split("").reverse().join("");
  return str === strReversed;
}

module.exports = { getInitials, createSlug, average, isPalindrome };
