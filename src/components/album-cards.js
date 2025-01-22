//* IMPORTS

import { BANDS } from '../data/database'

export { bandCard, getAlbumsData, albumCard }

function getAlbumsData() {
  const albums = BANDS.flatMap((band) =>
    band.albums.map((album) => ({
      bandName: band.bandName,
      bandCountry: band.country,
      cover: album.cover,
      title: album.title,
      year: album.year,
      genre: album.genre,
      length: album.length,
      type: album.type,
      price: album.price,
      rate: album.rate
    }))
  )

  return albums
}

const albumsData = getAlbumsData()

function bandCard(filteredBands) {
  const main = document.querySelector('main')
  const section = document.createElement('section')
  section.className = 'bandSection'

  const fragment = document.createDocumentFragment()

  filteredBands.forEach((band) => {
    const bandArticle = document.createElement('article')
    bandArticle.className = 'bandArticle'

    const bandCardHeader = document.createElement('div')
    bandCardHeader.className = 'bandCardHeader'

    const bandCardBody = document.createElement('div')
    bandCardBody.className = 'bandCardBody'

    const bandLogo = document.createElement('img')
    bandLogo.className = 'bandLogo'
    bandLogo.setAttribute('src', band.bandLogo)
    bandLogo.setAttribute('alt', band.bandName + ' logo')
    bandLogo.setAttribute('loading', 'lazy')

    const bandPhoto = document.createElement('img')
    bandPhoto.className = 'bandPhoto'
    bandPhoto.setAttribute('src', band.bandPhoto)
    bandPhoto.setAttribute('alt', band.bandName + ' band photo')
    bandPhoto.setAttribute('loading', 'lazy')

    const bandFlag = document.createElement('img')
    bandFlag.className = 'bandFlag'
    bandFlag.setAttribute('src', band.flag)
    bandFlag.setAttribute('alt', band.country)
    bandFlag.setAttribute('loading', 'lazy')

    const albumsForBand = albumsData.filter(
      (album) => album.bandName === band.bandName
    )

    albumCard(albumsForBand, bandCardBody)

    bandCardHeader.append(bandLogo, bandPhoto, bandFlag)
    bandArticle.append(bandCardHeader, bandCardBody)
    fragment.appendChild(bandArticle)
  })

  section.appendChild(fragment)
  main.appendChild(section)
}

function albumCard(filteredAlbums, container) {
  const fragment = document.createDocumentFragment()

  filteredAlbums.forEach((album) => {
    const albumContainer = document.createElement('div')
    albumContainer.className = 'albumContainer'

    const albumContainerHeader = document.createElement('div')
    albumContainerHeader.className = 'albumContainerHeader'
    const albumTitle = document.createElement('h3')
    albumTitle.className = 'albumTitle'
    albumTitle.textContent = album.title

    const albumContainerCover = document.createElement('div')
    albumContainerCover.className = 'albumContainerCover'
    const albumCoverImg = document.createElement('img')
    albumCoverImg.className = 'albumCoverImg'
    albumCoverImg.setAttribute('src', album.cover)
    albumCoverImg.setAttribute('alt', album.title + ' cover')
    albumCoverImg.setAttribute('loading', 'lazy')

    const coverDataContainer = document.createElement('div')
    coverDataContainer.className = 'coverDataContainer'
    const albumYear = document.createElement('p')
    albumYear.className = 'albumYear'
    albumYear.textContent = album.year
    const albumLength = document.createElement('p')
    albumLength.className = 'albumLength'
    albumLength.textContent = album.length
    const albumType = document.createElement('p')
    albumType.className = 'albumType'
    albumType.textContent = album.type

    const albumDataContainer = document.createElement('div')
    albumDataContainer.className = 'albumDataContainer'
    const albumBand = document.createElement('p')
    albumBand.className = 'albumBand'
    albumBand.textContent = `${album.bandName} (${album.bandCountry})`
    const albumGenreList = document.createElement('ul')
    albumGenreList.className = 'albumGenreList'
    album.genre.forEach((genre) => {
      const genreItem = document.createElement('li')
      genreItem.className = 'genreItem'
      genreItem.textContent = genre
      albumGenreList.appendChild(genreItem)
    })
    const albumPrice = document.createElement('p')
    albumPrice.className = 'albumPrice'
    albumPrice.textContent = `${album.price} €`

    const rateContainer = document.createElement('div')
    rateContainer.className = 'rateContainer'
    for (let i = 0; i < album.rate; i++) {
      const rateImage = document.createElement('img')
      rateImage.className = 'rateImage'
      rateImage.setAttribute(
        'src',
        'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905165/IMG_1476_1200x_lvou54_j0o0w9.webp'
      )
      rateImage.setAttribute('alt', album.rate + ' guitar icons rating')
      rateImage.setAttribute('loading', 'lazy')

      rateContainer.appendChild(rateImage)
    }

    albumContainerHeader.appendChild(albumTitle)
    coverDataContainer.append(albumYear, albumLength, albumType)
    albumContainerCover.append(albumCoverImg, coverDataContainer)
    albumDataContainer.append(albumBand, albumGenreList, albumPrice)
    albumContainer.append(
      albumContainerHeader,
      albumContainerCover,
      albumDataContainer,
      rateContainer
    )
    fragment.appendChild(albumContainer)
  })

  container.appendChild(fragment)
}
