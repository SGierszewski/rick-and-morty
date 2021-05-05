// export function getCharacters(name) {
//   // name to enable search function; add query parameters to URL to enable filtering (?) for e.g. name (query value)
//   return fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
//     .then((response) => response.json())
//     .then((data) => data.results);
// }

export async function getCharacters(name) {
  const promise = fetch(
    `https://rickandmortyapi.com/api/character?name=${name}`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data.results;
}
