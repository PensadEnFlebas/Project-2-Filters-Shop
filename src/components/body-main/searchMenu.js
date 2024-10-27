export { searchMenu }

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
  main.append(searchMenuContainer)
}
