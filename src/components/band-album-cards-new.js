//* IMPORTS

import { getRandomCards } from '../utils/random-initial-bandSection-new'
import { expandElement, resetElement } from '../utils/expand-elements'

export function createCardSection() {
  const main = document.querySelector('main')

  const section = document.createElement('section')
  section.className = 'bandSection'

  main.appendChild(section)
}

export function createBandCard(arrayBands, arrayAlbums, countAlbums = null) {
  let bandSection = document.querySelector('.bandSection')

  if (!bandSection) {
    bandSection = document.createElement('section')
    bandSection.classList.add('bandSection')
    document.querySelector('main').appendChild(bandSection)
  }
  bandSection.innerHTML = ''

  const fragment = document.createDocumentFragment()

  arrayBands.forEach((band) => {
    const bandAlbums = arrayAlbums.filter(
      (album) => album.bandName === band.bandName
    )
    const randomBandAlbums =
      countAlbums == null
        ? bandAlbums
        : getRandomCards(
            arrayAlbums,
            countAlbums,
            (album) => album.bandName === band.bandName
          )

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

    bandPhoto.addEventListener('click', (event) => {
      event.stopPropagation()

      const isExpanded = bandPhoto.classList.contains('expanded')

      document.querySelectorAll('.albumContainer.expanded').forEach((album) => {
        resetElement(album)
      })

      document.querySelectorAll('.bandPhoto.expanded').forEach((photo) => {
        if (photo !== bandPhoto) {
          resetElement(photo)
        }
      })

      if (!isExpanded) {
        expandElement(bandPhoto)
      } else {
        resetElement(bandPhoto)
      }
    })

    const bandFlag = document.createElement('img')
    bandFlag.className = 'bandFlag'
    bandFlag.setAttribute('src', band.flag)
    bandFlag.setAttribute('alt', band.country)
    bandFlag.setAttribute('loading', 'lazy')

    bandCardHeader.append(bandLogo, bandPhoto, bandFlag)
    bandArticle.append(bandCardHeader, bandCardBody)

    createAlbumCard(randomBandAlbums, bandCardBody)

    fragment.appendChild(bandArticle)
  })

  bandSection.appendChild(fragment)
}

export function createAlbumCard(arrayAlbums, container) {
  container.innerHTML = ''

  const fragment = document.createDocumentFragment()

  arrayAlbums.forEach((album) => {
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

    albumContainer.addEventListener('click', (event) => {
      event.stopPropagation()

      const isExpanded = albumContainer.classList.contains('expanded')

      document.querySelectorAll('.bandPhoto.expanded').forEach((photo) => {
        resetElement(photo)
      })

      document.querySelectorAll('.albumContainer.expanded').forEach((album) => {
        if (album !== albumContainer) {
          resetElement(album)
        }
      })

      if (!isExpanded) {
        expandElement(albumContainer)
      } else {
        resetElement(albumContainer)
      }
    })

    fragment.appendChild(albumContainer)
  })

  container.appendChild(fragment)
}

document.addEventListener('click', () => {
  document.querySelectorAll('.expanded').forEach(resetElement)
})
