export async function requestFilmsByGenre(value: string) {
  const data = await fetch(
    "http://localhost:8080/search/?type=movie&genres=" + value + "&minScore=7"
  );
  const results = await data.json();
  results.hits.splice(48, results.hits.length);
  console.log(results.hits);
  return results.hits;
}
export async function requestLatestFilms() {
  const data = await fetch(
    "http://localhost:8080/search/?type=movie&minYear=2022&minScore=7"
  );
  const results = await data.json();
  return results.hits;
}
export async function requestAllFilms() {
  const data = await fetch("http://localhost:8080/search/?type=movie");
  const results = await data.json();
  results.hits.splice(48, results.hits.length);
  console.log(results.hits);
  return results.hits;
}
export async function requestImages(title: string) {
  const data = await fetch(
    "https://www.omdbapi.com/?apikey=c901ed49&t=" + title
  );
  const results = await data.json();
  return results.Poster;
}
