export async function getCharacters() {
  return fetch("https://rickandmortyapi.com/api/character").then((response) =>
    response.json().then((response) => response.results)
  );
}
