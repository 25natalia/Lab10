class Movie {
    constructor(id, pelicula, nombre, rating, synopsis, banner, edad) {
        this.id = id,
        this.pelicula = pelicula,
        this.nombre = nombre,
        this.rating = rating,
        this.synopsis = synopsis,
        this.banner = banner,
        this.edad = edad
    }


    bannerHtml(position) {
        return `
        <div class="fondo" style="background-image: url(${this.banner})">
        <div class="banner" onclick='bannerSelected(${position})'>
        <div class= "padding">
            <h1 class="nombrepeli">${this.nombre}</h1>
                                <p id="rating">${this.rating}</p>
                            </div>
                        <p class="nombrepeli">${this.synopsis}</p>
                        <div class="botones-edad">
                            <button id="boton"><i id="play" class="fa-solid fa-play"></i>Play</button>
                            <button id="boton">Save <i id="save" class="fa-regular fa-bookmark"></i></button>
                            <p id="edad">${this.edad}</p>
        </div>
        </div>`
       
    }

recomendadosHtml(position) {
    return `
<div class="recomendado" onclick='recomendadoSelected(${position})'>
<img class="individual" src="${this.pelicula}" width="200" height="300"> </img>
    <div class="peli">
    <div class="letras"
         <p class="letras-estrellas">${this.rating}</p>
        <i id="bookmark" class="fa-regular fa-bookmark"></i>
        </div>
    </div>
    </div>

`
}

trendingHtml(position) {
    return `
    <div class="trending" onclick='trendingSelected(${position})'>
    <img class="individual" src="${this.pelicula}" width="200" height="300"></img>
`
}
}
