//* IMPORTS

import { BANDS } from '../../data/database.js'

export { albumCards }

// const bandKeys = Object.keys(BANDS[0]).filter((key) => key !== 'albums')

// const albumKeys = Object.keys(BANDS[0].albums[0]).filter(
//   (key) => key !== 'cover'
// )

// const cardKeys = [...bandKeys, ...albumKeys]

export function bandCard(bandName) {
  let cardSection = document.createElement('section')
  cardSection.classList.add('band-section')
  cardSection.innerHTML = ''

  // Buscar la banda por nombre
  let selectedBand = BANDS.find(
    (b) => b.bandName.toLowerCase() === bandName.toLowerCase()
  )

  if (selectedBand) {
    let bandCard = document.createElement('article')
    bandCard.classList.add('band-card')
    bandCard.style.border = '2px solid #ff0000'
    bandCard.style.padding = '10px'
    bandCard.style.marginBottom = '20px'

    let bandInfo = document.createElement('div')
    bandInfo.classList.add('band-info')
    bandInfo.style.display = 'flex'
    bandInfo.style.justifyContent = 'space-around'
    bandInfo.style.alignItems = 'center'

    let bandLogo = document.createElement('img')
    bandLogo.classList.add('band-logo')
    bandLogo.src = selectedBand.bandLogo
    bandLogo.alt = `${selectedBand.bandName} Logo`
    bandLogo.style.width = '150px'
    bandLogo.style.height = 'auto'

    let bandPhoto = document.createElement('img')
    bandPhoto.classList.add('band-photo')
    bandPhoto.src = selectedBand.bandPhoto
    bandPhoto.alt = `${selectedBand.bandName} Photo`
    bandPhoto.style.width = '150px'
    bandPhoto.style.height = 'auto'

    let bandFlag = document.createElement('img')
    bandFlag.classList.add('band-flag')
    bandFlag.src = selectedBand.flag
    bandFlag.alt = `${selectedBand.bandName} Map Flag`
    bandFlag.style.width = '150px'
    bandFlag.style.height = 'auto'

    // Añadir logo y foto a la card de banda
    bandInfo.append(bandLogo, bandPhoto, bandFlag)
    bandCard.append(bandInfo)

    // Añadir la card de la banda al contenedor principal
    cardSection.appendChild(bandCard)

    // Llamar a la función para generar las cards de los álbumes
    albumCards(selectedBand.albums, cardSection)
  } else {
    let errorMessage = document.createElement('p')
    errorMessage.textContent = 'No items found'

    cardSection.append(errorMessage)
  }

  // Añadir el contenedor de tarjetas al DOM
  const main = document.querySelector('main')
  main.append(cardSection)
}

function albumCards(albums, cardSection) {
  albums.forEach((album) => {
    // Crear el contenedor de la card del álbum
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')
    albumCard.style.border = '2px solid #0000ff'
    albumCard.style.padding = '10px'
    albumCard.style.marginBottom = '20px'

    // Contenedor para la imagen de la portada y la información del álbum
    const albumInfo = document.createElement('div')
    albumInfo.classList.add('album-info')
    albumInfo.style.display = 'flex'
    albumInfo.style.justifyContent = 'space-around'

    // Imagen de la portada del álbum
    const albumCover = document.createElement('img')
    albumCover.classList.add('album-cover')
    albumCover.src = album.cover
    albumCover.alt = `${album.title} Cover`

    // Contenedor de detalles del álbum
    const albumDetails = document.createElement('div')
    albumDetails.classList.add('album-details')
    albumDetails.style.display = 'flex'
    albumDetails.style.flexDirection = 'column'
    albumDetails.style.alignItems = 'flex-start'
    albumDetails.style.paddingLeft = '15px'

    // Año del álbum
    const albumYear = document.createElement('p')
    albumYear.innerHTML = `<strong>Año:</strong> ${album.year}`

    // Duración del álbum
    const albumLength = document.createElement('p')
    albumLength.innerHTML = `<strong>Length:</strong> ${album.length}`

    // Tipo de álbum
    const albumType = document.createElement('p')
    albumType.innerHTML = `<strong>Tipo:</strong> ${album.type}`

    // Precio del álbum
    const albumPrice = document.createElement('p')
    albumPrice.innerHTML = `<strong>Precio:</strong> €${album.price.toFixed(2)}`

    // Calificación del álbum
    const albumRate = document.createElement('p')
    albumRate.innerHTML = `<strong>Calificación:</strong> ${'★'.repeat(
      album.rate
    )}`

    // Géneros del álbum
    const albumGenres = document.createElement('p')
    albumGenres.innerHTML = `<strong>Género:</strong> ${album.genre.join(', ')}`

    // Añadir todos los detalles al contenedor de detalles del álbum
    albumDetails.append(
      albumYear,
      albumGenres,
      albumLength,
      albumType,
      albumPrice,
      albumRate
    )

    // Añadir portada y detalles al contenedor de información del álbum
    albumInfo.append(albumCover, albumDetails)

    // Añadir contenedor de información al contenedor de la card del álbum
    albumCard.append(albumInfo)

    // Añadir la card del álbum al contenedor principal
    cardSection.append(albumCard)
  })
}
