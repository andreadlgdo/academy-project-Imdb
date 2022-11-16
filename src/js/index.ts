export async function requestFilms(value: string) {
  const data = await fetch("http://localhost:8080/search/?genre=" + value);
  const results = await data.json();
  return results.hits;
}
