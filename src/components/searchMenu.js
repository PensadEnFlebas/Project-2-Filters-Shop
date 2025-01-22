//* IMPORTS
import { searchForm } from './searchForm'
import { hoverDisabler } from '../utils/hover-disabler'
import { randomBandSection } from './random-initial-bandSection'

export { searchMenu, closeSearchMenu }

function searchMenu() {
  const main = document.querySelector('main')

  const searchMenuContainer = document.createElement('div')
  searchMenuContainer.classList.add('searchMenuContainer')

  const searchMenuButton = document.createElement('button')
  searchMenuButton.classList.add('searchMenuButton')

  const p = document.createElement('p')
  p.textContent = `SEARCH`

  let searchMenuIcon = document.createElement('img')
  searchMenuIcon.classList.add('searchMenuIcon')
  searchMenuIcon.setAttribute('src', './src/assets/Search Menu Eye.gif')
  searchMenuIcon.setAttribute('alt', 'Eye searching Icon')
  searchMenuIcon.setAttribute('loading', 'lazy')

  const resetMenuButton = document.createElement('button')
  resetMenuButton.classList.add('resetMenuButton')

  const resetP = document.createElement('p')
  resetP.textContent = `RESET`

  let resetButtonIcon = document.createElement('img')
  resetButtonIcon.classList.add('resetButtonIcon')
  resetButtonIcon.setAttribute('src', './src/assets/Reset Button Vinyl.gif')
  resetButtonIcon.setAttribute('alt', 'Eye searching Icon')
  resetButtonIcon.setAttribute('loading', 'lazy')

  resetMenuButton.append(resetP, resetButtonIcon)
  searchMenuButton.append(p, searchMenuIcon)
  searchMenuContainer.append(searchMenuButton, resetMenuButton)

  main.appendChild(searchMenuContainer)

  hoverDisabler(searchMenuButton)
  hoverDisabler(resetMenuButton)

  searchMenuButton.addEventListener('click', function () {
    searchMenuContainer.classList.toggle('expanded')
    searchMenuButton.classList.toggle('expanded')
    resetMenuButton.classList.toggle('contracted')

    if (searchMenuContainer.classList.contains('expanded')) {
      p.textContent = `EXIT`
      searchMenuIcon.setAttribute('src', './src/assets/Exit Animated.gif')
      searchMenuIcon.setAttribute('alt', 'Opening Door icon')

      searchForm()

      const form = document.querySelector('form')
      if (form) {
        window.scrollTo({ top: form.offsetTop - 400, behavior: 'smooth' })

        requestAnimationFrame(() => {
          form.classList.add('visible')
        })
      }
    } else {
      p.textContent = `SEARCH`
      searchMenuIcon.setAttribute('src', './src/assets/Search Menu Eye.gif')
      searchMenuIcon.setAttribute('alt', 'Eye searching Icon')

      const form = document.querySelector('form')
      if (form) {
        form.classList.remove('visible')
        setTimeout(() => form.remove(), 500)
      }
    }
  })

  resetMenuButton.addEventListener('click', function () {
    const existingBandSection = document.querySelector('.bandSection')
    if (existingBandSection) {
      existingBandSection.remove()
    }

    randomBandSection()
  })
}

function closeSearchMenu() {
  const searchMenuContainer = document.querySelector('.searchMenuContainer')
  const searchMenuButton = document.querySelector('.searchMenuButton')
  const resetMenuButton = document.querySelector('.resetMenuButton')

  if (searchMenuContainer && searchMenuButton && resetMenuButton) {
    searchMenuContainer.classList.remove('expanded')
    searchMenuButton.classList.remove('expanded')
    resetMenuButton.classList.remove('contracted')

    const form = document.querySelector('form')
    if (form) {
      form.classList.remove('visible')
      setTimeout(() => form.remove(), 500)
    }

    const searchMenuIcon = searchMenuButton.querySelector('img')
    const p = searchMenuButton.querySelector('p')

    if (searchMenuIcon && p) {
      p.textContent = `SEARCH`
      searchMenuIcon.setAttribute('src', './src/assets/Search Menu Eye.gif')
      searchMenuIcon.setAttribute('alt', 'Eye searching Icon')
    }
  }
}
