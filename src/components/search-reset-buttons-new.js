//* IMPORTS

import { createBandCard } from './band-album-cards-new'
import { getRandomCards } from '../utils/random-initial-bandSection-new'
import { BANDS, albumsData } from '../data/database'

export function createButtons(
  container,
  showText,
  showUrl,
  showId,
  closeText,
  closeUrl,
  closeId
) {
  const buttonsContainer = document.createElement('div')
  buttonsContainer.classList.add('buttonsContainer')

  const showButton = document.createElement('button')
  showButton.classList.add('button', 'showButton')
  showButton.id = `${showId}`

  const showP = document.createElement('p')
  showP.textContent = showText

  let showIcon = document.createElement('img')
  showIcon.classList.add('buttonIcon', 'showIcon')
  showIcon.setAttribute('src', showUrl)
  showIcon.setAttribute('alt', `${showText} icon`)
  showIcon.setAttribute('loading', 'lazy')

  const closeButton = document.createElement('button')
  closeButton.classList.add('button', 'closeButton')
  closeButton.id = `${closeId}`

  const closeP = document.createElement('p')
  closeP.textContent = closeText

  let closeIcon = document.createElement('img')
  closeIcon.classList.add('buttonIcon', 'closeIcon')
  closeIcon.setAttribute('src', closeUrl)
  closeIcon.setAttribute('alt', `${closeText} icon`)
  closeIcon.setAttribute('loading', 'lazy')

  showButton.append(showP, showIcon)
  closeButton.append(closeP, closeIcon)
  buttonsContainer.append(showButton, closeButton)

  container.appendChild(buttonsContainer)

  document.getElementById(`${showId}`).addEventListener('click', function () {
    const existingBandSection = document.querySelector('.bandSection')
    if (existingBandSection) {
      existingBandSection.remove()
    }

    createBandCard(getRandomCards(BANDS, 5), albumsData, 3)
  })

  document.getElementById(`${closeId}`).addEventListener('click', function () {
    const existingBandSection = document.querySelector('.bandSection')
    if (existingBandSection) {
      existingBandSection.remove()
    }

    createBandCard(getRandomCards(BANDS, 5), albumsData, 3)
  })
}
