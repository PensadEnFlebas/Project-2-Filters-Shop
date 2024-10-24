export { mainTitle }

function mainTitle() {
  const main = document.querySelector('main')

  const titleContainer = document.createElement('div')
  titleContainer.classList.add('titleContainer')

  const h1 = document.createElement('h1')
  const spanH1 = document.createElement('span')
  spanH1.textContent = 'O'
  h1.innerHTML = `G`
  h1.append(spanH1)
  h1.innerHTML += 'BLIN'

  const h2 = document.createElement('h2')
  const spanH2 = document.createElement('span')
  spanH2.textContent = 'O'
  h2.innerHTML = `Heavy  Metal  St `
  h2.append(spanH2)
  h2.innerHTML += 're'

  titleContainer.append(h1)
  titleContainer.append(h2)
  main.append(titleContainer)
}
