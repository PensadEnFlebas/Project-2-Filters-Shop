export { hoverDisabler }

function hoverDisabler(touchedElement) {
  touchedElement.addEventListener('touchstart', () => {
    touchedElement.classList.add('hover-disabled')
  })

  touchedElement.addEventListener('touchend', () => {
    touchedElement.classList.remove('hover-disabled')
  })
}
