export function expandElement(element) {
  const rect = element.getBoundingClientRect()

  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  const translateX = centerX - (rect.left + rect.width / 2)
  const translateY = centerY - (rect.top + rect.height / 2)

  element.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.5)`

  element.classList.add('expanded')
  document.body.classList.add('blur-background', 'blur-active', 'no-scroll')
}

export function resetElement(element) {
  element.style.transform = ''
  element.style.zIndex = ''

  element.classList.remove('expanded')

  if (
    !document.querySelector('.bandPhoto.expanded') &&
    !document.querySelector('.albumContainer.expanded')
  ) {
    document.body.classList.remove(
      'blur-active',
      'blur-background',
      'no-scroll'
    )
  }
}
