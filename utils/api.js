export function getCharacters(name) {
  // name to enable search function; add query parameters to URL to enable filtering (?) for e.g. name (query value)
  return fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
    .then((response) => response.json())
    .then((response) => response.results);
}
