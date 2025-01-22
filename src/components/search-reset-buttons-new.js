export function createButtons(
  container,
  showText,
  showUrl,
  closeText,
  closeUrl
) {
  const buttonsContainer = document.createElement('div')
  buttonsContainer.classList.add('buttonsContainer')

  const showButton = document.createElement('button')
  showButton.classList.add('button', 'showButton')

  const showP = document.createElement('p')
  showP.textContent = showText

  let showIcon = document.createElement('img')
  showIcon.classList.add('buttonIcon', 'showIcon')
  showIcon.setAttribute('src', showUrl)
  showIcon.setAttribute('alt', `${showText} icon`)
  showIcon.setAttribute('loading', 'lazy')

  const closeButton = document.createElement('button')
  closeButton.classList.add('button', 'closeButton')

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
}
