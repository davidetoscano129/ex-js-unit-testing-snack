// Snack 1
function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter((str) => str !== " ");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

// Snack 2
function createSlug(str) {
  return str.toLowerCase().replaceAll(" ", "-");
}

// Snack 3
function average(array) {
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
}

module.exports = { getInitials, createSlug, average };
