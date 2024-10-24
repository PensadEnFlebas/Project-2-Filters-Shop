export { HEADER }

function HEADER() {
  let logoDiv = document.createElement('div')
  logoDiv.classList.add('logoDiv')
  let logoImg = document.createElement('img')
  logoImg.classList.add('logoImg', 'header-footer-img')
  logoImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1728733708/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/Goblin%20Store%20Logos/Goblin_Store_Icon_gsbxs6.png'
  )
  logoImg.setAttribute('alt', 'Goblin Store Logo')
  logoImg.setAttribute('loading', 'lazy')
  logoDiv.append(logoImg)

  let explosionGifDiv = document.createElement('div')
  explosionGifDiv.classList.add('explosionGifDiv')

  let explosionGifImg = document.createElement('img')
  explosionGifImg.classList.add('explosionGifImg', 'header-footer-img')
  explosionGifImg.setAttribute(
    'src',
    './src/assets/bgImages/Nuclear explosion.gif'
  )
  explosionGifImg.setAttribute('alt', 'Nuclear explosion')
  explosionGifImg.setAttribute('loading', 'lazy')
  explosionGifDiv.append(explosionGifImg)

  let skeletonDiv = document.createElement('div')
  skeletonDiv.classList.add('skeletonDiv')
  let skeletonImg = document.createElement('img')
  skeletonImg.classList.add('skeletonImg', 'header-footer-img')
  skeletonImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1728769392/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/BG%20images/41_mseosv.png'
  )
  skeletonImg.setAttribute('alt', 'Skeleton in header')
  skeletonImg.setAttribute('loading', 'lazy')
  skeletonDiv.append(skeletonImg)

  const header = document.querySelector('header')
  header.append(logoDiv)
  header.append(explosionGifDiv)
  header.append(skeletonDiv)
}
