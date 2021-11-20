const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3cf2747f302d6d636fc27e224c45e9b7&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=3cf2747f302d6d636fc27e224c45e9b7&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//initially get fav movies 
getMovies(APIURL);

async function getMovies(url){
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}

function showMovies(movies) {
    //clear main
    main.innerHTML = "";

    movies.forEach((movie) => {
        const {poster_path, title, vote_average, overview} = movie;

        const movieEL = document.createElement("div");
        movieEL.classList.add("movie");

        movieEL.innerHTML = `
            <img 
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

        main.appendChild(movieEL);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});