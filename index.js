let peliculas = []
for(let i = 0; i < data.length; i++) {
    const peliculaJson = data[i]
    const pelicula = new Movie(
            peliculaJson.id, 
            peliculaJson.pelicula,
            peliculaJson.nombre, 
            peliculaJson.rating,
            peliculaJson.synopsis,  
            peliculaJson.banner,
            peliculaJson.edad,
            )
    peliculas.push(pelicula)      
}



function renderAllpeliculasrecomendados(peliculas) {
    let container = document.getElementById("peli")
    container.innerHTML = ""
    for(let i = 0; i <= 7; i++) {
        const pelicula= peliculas[i]
        container.innerHTML += pelicula.recomendadosHtml(i)
    }
}
renderAllpeliculasrecomendados(peliculas)

function renderAlltrending(peliculas){
    let container = document.getElementById("peliculas1")
    container.innerHTML = ""
    for (let i = 8; i < peliculas.length; i++){
        const pelicula = peliculas [i]
        container.innerHTML += pelicula.trendingHtml(i)
    }
}
renderAlltrending(peliculas)

function renderAllFilmsBanner(peliculas) {
    let container = document.getElementById("banner")
    const pelicula = peliculas [0]
    container.innerHTML = pelicula.bannerHtml(0)

    
}
renderAllFilmsBanner(peliculas)