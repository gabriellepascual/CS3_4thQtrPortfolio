let rating = 0

const stars = document.querySelectorAll("#stars span")

stars.forEach(star => {
    star.addEventListener("click", () => {
        rating = star.dataset.value

        stars.forEach(s => s.style.color="lightgray")

        for(let i=0;i<rating;i++){
            stars[i].style.color="gold"
        }
    })
})

let movies = JSON.parse(localStorage.getItem("movies")) || []

displayMovies()

function addMovie(){

let title = document.getElementById("title").value
let year = document.getElementById("year").value
let genre = document.getElementById("genre").value

if(title=="" || year=="" || rating==0){
    alert("Please complete the form")
    return
}

let existingMovie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase())

if(existingMovie){

    let avg = Math.round((parseInt(existingMovie.rating) + parseInt(rating)) / 2)

    existingMovie.year = year
    existingMovie.genre = genre
    existingMovie.rating = avg

}else{

    let movie = {
        title:title,
        year:year,
        genre:genre,
        rating:rating
    }

    movies.push(movie)
}

localStorage.setItem("movies", JSON.stringify(movies))

displayMovies()

clearForm()
}

function displayMovies(){

let list = document.getElementById("movieList")
list.innerHTML=""

movies.forEach((movie,index) => {

let starsDisplay = "★".repeat(movie.rating)

list.innerHTML += `
<div class="movie-item">
${movie.title} (${movie.year}) - ${movie.genre}, Rating:
<span class="movie-stars">${starsDisplay}</span>

<button class="delete-btn" onclick="deleteMovie(${index})">Delete</button>
</div>` })
}

function clearForm(){
document.getElementById("title").value=""
document.getElementById("year").value=""
rating=0
stars.forEach(s => s.style.color="lightgray")
}

function deleteMovie(index){

let confirmDelete = confirm("Are you sure you want to delete?")

if(confirmDelete){

movies.splice(index,1)

localStorage.setItem("movies", JSON.stringify(movies))

displayMovies() }
}
