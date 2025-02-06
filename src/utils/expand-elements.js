export function expandElement(element) {
  const rect = element.getBoundingClientRect()

  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  const translateX = centerX - (rect.left + rect.width / 2)
  const translateY = centerY - (rect.top + rect.height / 2)

  element.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.5)`

  element.classList.add('expanded')
  document.body.classList.add('blur-background', 'blur-active', 'no-scroll')

  if (element.classList.contains('albumContainer')) {
    if (!element.querySelector('.buyButton')) {
      const buyButton = document.createElement('button')
      buyButton.classList.add('button', 'buyButton')
      buyButton.textContent = 'Buy'

      const buyGif = document.createElement('img')
      buyGif.className = 'buttonIcon'
      buyGif.setAttribute(
        'src',
        'https://res.cloudinary.com/dwjwglwsq/image/upload/v1738548392/e02ce86bcfd6d1d6c2f775afb3ec8c01_w200_i2whyc.gif'
      )
      buyGif.setAttribute('alt', 'Eddie the Head animated')
      buyGif.setAttribute('loading', 'lazy')

      buyButton.append(buyGif)
      element.appendChild(buyButton)

      buyButton.addEventListener('click', () => {
        const pShopNum = document.querySelector('.pShopNum')
        if (pShopNum) {
          pShopNum.textContent = parseInt(pShopNum.textContent, 10) + 1
          const albumTitle = element.querySelector('.albumTitle')?.textContent
          const bandName = element.querySelector('.albumBand')?.textContent

          alert(
            `🤘 ¡Thank You! '${albumTitle}' by ${bandName} has been added to your shopping Metalcart`
          )
        }
      })
    }
  }
}

export function resetElement(element) {
  element.style.transform = ''
  element.style.zIndex = ''

  element.classList.remove('expanded')

  if (element.classList.contains('albumContainer')) {
    const buyButton = element.querySelector('.buyButton')
    if (buyButton) {
      buyButton.remove()
    }
  }

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
