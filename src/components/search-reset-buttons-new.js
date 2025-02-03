//* IMPORTS

import { createBandCard } from './band-album-cards-new'
import { getRandomCards } from '../utils/random-initial-bandSection-new'
import { BANDS, albumsData } from '../data/database'
import { filterBandsAndAlbums } from '../utils/get-filtered-form-values-new'
import { createFilteredBandCards } from './get-filtered-band-album-cards-new'

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
  showButton.classList.add('button')
  showButton.id = showId

  const showP = document.createElement('p')
  showP.textContent = showText

  let showIcon = document.createElement('img')
  showIcon.classList.add('buttonIcon')
  showIcon.setAttribute('src', showUrl)
  showIcon.setAttribute('alt', `${showText} icon`)
  showIcon.setAttribute('loading', 'lazy')

  const closeButton = document.createElement('button')
  closeButton.classList.add('button')
  closeButton.id = closeId

  const closeP = document.createElement('p')
  closeP.textContent = closeText

  let closeIcon = document.createElement('img')
  closeIcon.classList.add('buttonIcon')
  closeIcon.setAttribute('src', closeUrl)
  closeIcon.setAttribute('alt', `${closeText} icon`)
  closeIcon.setAttribute('loading', 'lazy')

  showButton.append(showP, showIcon)
  closeButton.append(closeP, closeIcon)
  buttonsContainer.append(showButton, closeButton)

  container.appendChild(buttonsContainer)

  showButton.addEventListener('click', function (event) {
    if (showId === 'searchButton') {
      const body = document.querySelector('body')
      body.classList.add('no-scroll-form')
      const form = document.querySelector('.search-form')
      form.classList.remove('hidden')
      const overlay = document.querySelector('.overlay')
      overlay.classList.remove('hidden')
    } else if (showId === 'findItButton') {
      event.preventDefault()

      const body = document.querySelector('body')
      body.classList.remove('no-scroll-form')
      const form = document.querySelector('.search-form')
      form.classList.add('hidden')
      const overlay = document.querySelector('.overlay')
      overlay.classList.add('hidden')
      const formData = new FormData(form)

      const formValues = {}
      formData.forEach((value, key) => {
        formValues[key] = value
      })

      console.log('Form Values:', formValues)

      const { bandsWithAlbums, filteredAlbums } =
        filterBandsAndAlbums(formValues)

      console.log('Filtered Bands: ', bandsWithAlbums)
      console.log('Filtered Albums: ', filteredAlbums)

      const existingBandSection = document.querySelector('.bandSection')
      if (existingBandSection) {
        existingBandSection.remove()
      }

      if (bandsWithAlbums.length === 0) {
        const main = document.querySelector('main')

        const noResultsSection = document.createElement('section')
        noResultsSection.classList.add('bandSection')

        const noResultsCard = document.createElement('article')
        noResultsCard.classList.add('noResultsCard')

        const noResultsText = document.createElement('p')
        noResultsText.classList.add('noResultsText')
        noResultsText.textContent =
          'No hay coincidencias. Prueba con otros criterios.'

        let noResultsGif = document.createElement('img')
        noResultsGif.classList.add('noResultsGif')
        noResultsGif.setAttribute(
          'src',
          'https://res.cloudinary.com/dwjwglwsq/image/upload/v1738376460/Guitarsmash_yrehmn.gif'
        )
        noResultsGif.setAttribute('alt', 'Metalhead braking a guitar')
        noResultsGif.setAttribute('loading', 'lazy')

        noResultsCard.append(noResultsText, noResultsGif)
        noResultsSection.appendChild(noResultsCard)
        main.appendChild(noResultsSection)
      } else {
        createFilteredBandCards(bandsWithAlbums, filteredAlbums)
      }

      setTimeout(() => {
        const newBandSection = document.querySelector('.bandSection')
        if (newBandSection) {
          const headerHeight = document.querySelector('header').offsetHeight
          const titleContainerHeight =
            document.querySelector('.titleContainer').offsetHeight

          window.scrollTo({
            top:
              newBandSection.offsetTop - (headerHeight + titleContainerHeight),
            behavior: 'smooth'
          })
        }
      }, 100)

      form.reset()
    }
  })

  closeButton.addEventListener('click', function (event) {
    if (closeId === 'resetButton') {
      const existingBandSection = document.querySelector('.bandSection')
      if (existingBandSection) {
        existingBandSection.remove()
      }

      createBandCard(getRandomCards(BANDS, 5), albumsData, 3)

      setTimeout(() => {
        const newBandSection = document.querySelector('.bandSection')
        if (newBandSection) {
          const headerHeight = document.querySelector('header').offsetHeight
          const titleContainerHeight =
            document.querySelector('.titleContainer').offsetHeight

          window.scrollTo({
            top:
              newBandSection.offsetTop - (headerHeight + titleContainerHeight),
            behavior: 'smooth'
          })
        }
      }, 100)
    } else if (closeId === 'exitButton') {
      event.preventDefault()

      const body = document.querySelector('body')
      body.classList.remove('no-scroll-form')
      const form = document.querySelector('.search-form')
      form.classList.add('hidden')
      const overlay = document.querySelector('.overlay')
      overlay.classList.add('hidden')

      form.reset()
    }
  })
}
