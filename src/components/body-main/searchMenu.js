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

  searchMenuButton.append(p)
  searchMenuButton.append(searchMenuIcon)
  searchMenuContainer.append(searchMenuButton)
  main.append(searchMenuContainer)
}
