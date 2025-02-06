export { HEADER }

function HEADER() {
  let logoDiv = document.createElement('div')
  logoDiv.classList.add('logoDiv')
  let logoImg = document.createElement('img')
  logoImg.classList.add('logoImg', 'headerImg')
  logoImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905160/Goblin_Store_Icon_gsbxs6_rhij2b.png'
  )
  logoImg.setAttribute('alt', 'Goblin Store Logo')
  logoImg.setAttribute('loading', 'lazy')
  logoDiv.appendChild(logoImg)

  let explosionGifDiv = document.createElement('div')
  explosionGifDiv.classList.add('explosionGifDiv')

  let explosionGifImg = document.createElement('img')
  explosionGifImg.classList.add('explosionGifImg', 'headerImg')
  explosionGifImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1738855166/Nuclear_explosion_evvcjr.gif'
  )
  explosionGifImg.setAttribute('alt', 'Nuclear explosion')
  explosionGifImg.setAttribute('loading', 'lazy')
  explosionGifDiv.appendChild(explosionGifImg)

  let skeletonDiv = document.createElement('div')
  skeletonDiv.classList.add('skeletonDiv')
  let skeletonImg = document.createElement('img')
  skeletonImg.classList.add('skeletonImg')
  skeletonImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905177/41_mseosv_no6ppc.png'
  )
  skeletonImg.setAttribute('alt', 'Skeleton in header')
  skeletonImg.setAttribute('loading', 'lazy')
  skeletonDiv.appendChild(skeletonImg)

  const header = document.querySelector('header')
  header.append(logoDiv, explosionGifDiv, skeletonDiv)
}
