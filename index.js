function fetchMovie(title) {
   return fetch(`http://www.omdbapi.com/?t=${title}&apikey=3b242c3`)
  .then((data) => data.json())
  .catch((err) => console.log(err))
}

const searchButton = document.querySelector('#search')

searchButton.addEventListener('click', () => {
    let cntr = ''
    const movieTitle = document.querySelector('#movie-title-input').value
    const movieObj = fetchMovie(movieTitle)
    const mainDivSpace = document.querySelector('.main')
    movieObj.then((data) => {
        mainDivSpace.append(`Years after release: ${2022 - data.Year}, Country: ${data.Country}, Actors: ${data.Actors}`)
    })
})