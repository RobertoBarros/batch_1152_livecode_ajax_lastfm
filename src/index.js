// API Doc: https://www.last.fm/api/show/artist.getTopAlbums


const apiKey = "COLOQUE SUA CHAVE DA LASTFM AQUI";
const baseUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums`

const form = document.getElementById('search')
const artistInput = document.getElementById('artist')
const container = document.getElementById('albums-container')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const artist = artistInput.value
  const url = `${baseUrl}&api_key=${apiKey}&artist=${artist}&format=json&limit=5`

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      container.innerHTML = ''
      data.topalbums.album.forEach((album) => {
        container.insertAdjacentHTML('beforeend', albumItem(album))
      })

    })

})

const albumItem = (album) => {
  return `
  <div class="row mt-3">
    <div class="col-12 d-flex justify-content-start">
      <img src="${album.image[2]['#text']}">
      <div class='ms-3'>
        <h2>${album.name}</h2>
        <p>${album.artist.name}</p>
      </div>
    </div>
  </div>
  `
}
