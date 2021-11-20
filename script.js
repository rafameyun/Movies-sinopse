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

