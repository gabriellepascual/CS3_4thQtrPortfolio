let stars = 
    document.getElementsByClassName("star");

let rate = 0

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    rate = n
}

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}

let movieList = JSON.parse(localStorage.getItem("savedMovieList")) || []

displayMovies(movieList);

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let exists = false;

    for (let i=0; i<movieList.length; i++) {
        if (movieList[i].title.toLowerCase() == movieTitle.value.toLowerCase()) {
            movieList[i].rating = Math.round((Number(movieList[i].rating) + rate) / 2);
            exists = true;
            break;
        }
    }

    if (!exists) {
        movieList.push({
            title: movieTitle.value,
            year: movieYear.value,
            genre: movieGenre.value,
            rating: rate
        });
    }

    localStorage.setItem("savedMovieList", JSON.stringify(movieList)); 
    displayMovies(movieList);
})

function displayMovies(movieList) {
    displayList = "";

    for (let m = 0; m < movieList.length; m++) {
        let idx = 0;
        let stars = ``;

        while (idx < Number(movieList[m].rating)){
            stars += `<span style="color:gold;">★</span>`;
            idx++;
        }

        displayList += `<div class="movie">${movieList[m].title} (${movieList[m].year}) - ${movieList[m].genre}, Rating: ${stars} <button id="deleteMovie" onclick="delMovie()"> Delete </button> </div>`;
    }

    listMovies.innerHTML = displayList;
}

function delMovie(idx) {
    let delConfirm = confirm("Are you sure you want to delete?")
    if (delConfirm) {
        movieList.splice(idx, 1);
        localStorage.setItem("savedMovieList", JSON.stringify(movieList)); 
        displayMovies(movieList);
    } else {
        alert("Deletion cancelled.")
    }
}