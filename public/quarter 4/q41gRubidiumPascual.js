let stars = document.querySelectorAll(".star");
let rating = 0;

function setRating(value){

    rating = value;

    stars.forEach((star, index)=>{
        if(index < value){
            star.classList.add("active");
        }else{
            star.classList.remove("active");
        }
    });

}

let movieList = JSON.parse(localStorage.getItem("movies")) || [];

displayMovies();

const form = document.getElementById("movieForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const title = document.getElementById("movieTitle").value;
    const year = document.getElementById("movieYear").value;
    const genre = document.getElementById("movieGenre").value;

    const movie = {
        title: title,
        year: year,
        genre: genre,
        rating: rating
    };

    movieList.push(movie);

    localStorage.setItem("movies", JSON.stringify(movieList));

    displayMovies();

    form.reset();
    rating = 0;

    stars.forEach(star=>{
        star.classList.remove("active");
    });

});

function displayMovies(){

    const list = document.getElementById("listMovies");

    list.innerHTML = "";

    movieList.forEach(movie=>{

        let starDisplay = "";

        for(let i=0;i<movie.rating;i++){
            starDisplay += `<span style="color:gold;">★</span>`;
        }

        list.innerHTML += `
        <div class="movie">
        ${movie.title} (${movie.year}) - ${movie.genre}, Rating: ${starDisplay}
        </div>
        `;

    });

}