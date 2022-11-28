const apiEndPoint = process.env.SEARCH_API_URI || "http://localhost:8080";

export async function requestFilmsByGenre(value: string) {
  const data = await fetch(
    apiEndPoint + "/search/?type=movie&genres=" + value + "&maxNHits=48"
  );
  const results = await data.json();
  const films = localStorage.getItem("titleFilm");
  const filmsSaved = localStorage.getItem("titleSavedFilm");
  const filmsSeen = localStorage.getItem("titleSeenFilm");
  if (films !== null) {
    const film = films.substring(1, films.length - 1).split(",");
    for (let i = 0; i < results.hits.length; i = i + 1) {
      let l = false;
      for (let j = 0; j < film.length; j++) {
        if (
          film[j].substring(1, film[j].length - 1) ===
          results.hits[i].primaryTitle
        ) {
          l = true;
        }
      }
      results.hits[i].liked = l;
    }
  }
  if (filmsSaved !== null) {
    const filmSaved = filmsSaved.substring(1, filmsSaved.length - 1).split(",");
    for (let i = 0; i < results.hits.length; i = i + 1) {
      let s = false;
      for (let j = 0; j < filmSaved.length; j++) {
        if (
          filmSaved[j].substring(1, filmSaved[j].length - 1) ===
          results.hits[i].primaryTitle
        ) {
          s = true;
        }
      }
      results.hits[i].saved = s;
    }
  }
  if (filmsSeen !== null) {
    const filmSeen = filmsSeen.substring(1, filmsSeen.length - 1).split(",");
    for (let i = 0; i < results.hits.length; i = i + 1) {
      let v = false;
      for (let j = 0; j < filmSeen.length; j++) {
        if (
          filmSeen[j].substring(1, filmSeen[j].length - 1) ===
          results.hits[i].primaryTitle
        ) {
          v = true;
        }
      }
      results.hits[i].seen = v;
    }
  }
  return results.hits;
}
export async function requestLatestFilms() {
  const data = await fetch(
    apiEndPoint + "/search/?type=movie&minYear=2022&minScore=5"
  );
  const results = await data.json();
  return results.hits;
}
export async function requestAllFilms() {
  const data = await fetch(apiEndPoint + "/search/?type=movie&maxNHits=48");
  const results = await data.json();
  const films = localStorage.getItem("titleFilm");
  const filmsSaved = localStorage.getItem("titleSavedFilm");
  const filmsSeen = localStorage.getItem("titleSeenFilm");
  if (films !== null) {
    const film = films.substring(1, films.length - 1).split(",");
    for (let i = 0; i < results.hits.length; i = i + 1) {
      let l = false;
      for (let j = 0; j < film.length; j++) {
        if (
          film[j].substring(1, film[j].length - 1) ===
          results.hits[i].primaryTitle
        ) {
          l = true;
        }
      }
      results.hits[i].liked = l;
    }
  }
  if (filmsSaved !== null) {
    const filmSaved = filmsSaved.substring(1, filmsSaved.length - 1).split(",");
    for (let i = 0; i < results.hits.length; i = i + 1) {
      let s = false;
      for (let j = 0; j < filmSaved.length; j++) {
        if (
          filmSaved[j].substring(1, filmSaved[j].length - 1) ===
          results.hits[i].primaryTitle
        ) {
          s = true;
        }
      }
      results.hits[i].saved = s;
    }
  }
  if (filmsSeen !== null) {
    const filmSeen = filmsSeen.substring(1, filmsSeen.length - 1).split(",");
    for (let i = 0; i < results.hits.length; i = i + 1) {
      let v = false;
      for (let j = 0; j < filmSeen.length; j++) {
        if (
          filmSeen[j].substring(1, filmSeen[j].length - 1) ===
          results.hits[i].primaryTitle
        ) {
          v = true;
        }
      }
      results.hits[i].seen = v;
    }
  }
  return results.hits;
}
export async function requestImages(title: string) {
  const data = await fetch(
    "https://www.omdbapi.com/?apikey=c901ed49&t=" + title
  );
  const results = await data.json();
  return results.Poster;
}
export async function requestFilterRandomFilms(params: any[], filters: any[]) {
  if (filters.length === 3) {
    const data = await fetch(
      apiEndPoint +
        "/search/?type=movie&maxNHits=8&" +
        filters[0] +
        "=" +
        params[0] +
        "&" +
        filters[1] +
        "=" +
        params[1] +
        "&" +
        filters[2] +
        "=" +
        params[2]
    );
    const results = await data.json();
    //results.hits.splice(8, results.hits.length);
    return results.hits;
  } else {
    const data = await fetch(
      apiEndPoint +
        "/search/?type=movie&maxNHits=8&" +
        filters[0] +
        "=" +
        params[0] +
        "," +
        params[1] +
        "&" +
        filters[2] +
        "=" +
        params[2] +
        "&" +
        filters[3] +
        "=" +
        params[3]
    );
    const results = await data.json();
    //results.hits.splice(8, results.hits.length);
    return results.hits;
  }
}
export async function requestFilterFilms(
  params: any[],
  filters: any[],
  genres: any[]
) {
  let filterGenres = "&genres=";
  if (genres.length === 1) {
    filterGenres += genres[0];
  } else if (genres.length === 2) {
    filterGenres += genres[0] + "," + genres[1];
  } else if (genres.length === 3) {
    filterGenres += genres[0] + "," + genres[1] + "," + genres[2];
  } else if (genres.length === 0) {
    filterGenres = "";
  }
  const request =
    apiEndPoint +
    "/search/?types=movie" +
    filterGenres +
    "&" +
    filters[0] +
    "=" +
    params[0] +
    "&" +
    filters[1] +
    "=" +
    params[1] +
    "&" +
    filters[2] +
    "=" +
    params[2] +
    "&" +
    filters[3] +
    "=" +
    params[3] +
    "&" +
    filters[4] +
    "=" +
    params[4] +
    "&" +
    filters[5] +
    "=" +
    params[5] +
    "&" +
    filters[6] +
    "=" +
    params[6] +
    "&maxNHits=48";
  const data = await fetch(request);
  const results = await data.json();
  const films = localStorage.getItem("titleFilm");
  const filmsSaved = localStorage.getItem("titleSavedFilm");
  const filmsSeen = localStorage.getItem("titleSeenFilm");
  if (films !== null) {
    const film = films.substring(1, films.length - 1).split(",");
    for (let i = 0; i < results.hits.length; i = i + 1) {
      let l = false;
      for (let j = 0; j < film.length; j++) {
        if (
          film[j].substring(1, film[j].length - 1) ===
          results.hits[i].primaryTitle
        ) {
          l = true;
        }
      }
      results.hits[i].liked = l;
    }
  }
  if (filmsSaved !== null) {
    const filmSaved = filmsSaved.substring(1, filmsSaved.length - 1).split(",");
    for (let i = 0; i < results.hits.length; i = i + 1) {
      let s = false;
      for (let j = 0; j < filmSaved.length; j++) {
        if (
          filmSaved[j].substring(1, filmSaved[j].length - 1) ===
          results.hits[i].primaryTitle
        ) {
          s = true;
        }
      }
      results.hits[i].saved = s;
    }
  }
  if (filmsSeen !== null) {
    const filmSeen = filmsSeen.substring(1, filmsSeen.length - 1).split(",");
    for (let i = 0; i < results.hits.length; i = i + 1) {
      let v = false;
      for (let j = 0; j < filmSeen.length; j++) {
        if (
          filmSeen[j].substring(1, filmSeen[j].length - 1) ===
          results.hits[i].primaryTitle
        ) {
          v = true;
        }
      }
      results.hits[i].seen = v;
    }
  }
  return results.hits;
}
