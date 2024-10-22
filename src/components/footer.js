export { FOOTER }

function FOOTER() {
  let containerFooterDiv = document.createElement('div')
  containerFooterDiv.classList.add('containerFooterDiv')

  let pyramidDiv = document.createElement('div')
  pyramidDiv.classList.add('pyramidDiv')

  let pyramidImg = document.createElement('img')
  pyramidImg.classList.add('pyramidImg')
  pyramidImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1729021281/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/BG%20images/Pyramid_main_ahg8yl.png'
  )
  pyramidImg.setAttribute('alt', 'Powerslave pyramid')
  pyramidImg.setAttribute('loading', 'lazy')
  pyramidDiv.append(pyramidImg)

  let zombieDiv = document.createElement('div')
  zombieDiv.classList.add('zombieDiv')
  let zombieImg = document.createElement('img')
  zombieImg.classList.add('zombieImg')
  zombieImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1729021306/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/BG%20images/Eddie_main_qdquoh.png'
  )
  zombieImg.setAttribute('alt', 'Zombie walking animation')
  zombieImg.setAttribute('loading', 'lazy')
  zombieDiv.append(zombieImg)

  const footer = document.querySelector('footer')
  footer.append(containerFooterDiv)
  containerFooterDiv.append(pyramidDiv, zombieDiv)
}
