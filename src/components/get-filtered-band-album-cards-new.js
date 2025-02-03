//* IMPORTS

import { createAlbumCard } from './band-album-cards-new'
import { expandElement, resetElement } from '../utils/expand-elements'

export function createFilteredBandCards(filteredBands, filteredAlbums) {
  let bandSection = document.querySelector('.bandSection')

  if (!bandSection) {
    bandSection = document.createElement('section')
    bandSection.classList.add('bandSection')
    document.querySelector('main').appendChild(bandSection)
  }
  bandSection.innerHTML = ''

  const fragment = document.createDocumentFragment()

  filteredBands.forEach((band) => {
    const bandAlbums = filteredAlbums.filter(
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

    createAlbumCard(bandAlbums, bandCardBody)

    fragment.appendChild(bandArticle)
  })

  bandSection.appendChild(fragment)
}
