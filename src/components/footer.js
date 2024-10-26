export { FOOTER }

function FOOTER() {
  let containerFooterDiv = document.createElement('div')
  containerFooterDiv.classList.add('containerFooterDiv')

  let pyramidDiv = document.createElement('div')
  pyramidDiv.classList.add('pyramidDiv')

  let pyramidImg = document.createElement('img')
  pyramidImg.classList.add('pyramidImg', 'header-footer-img')
  pyramidImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1729021281/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/BG%20images/Pyramid_main_ahg8yl.png'
  )
  pyramidImg.setAttribute('alt', 'Powerslave pyramid')
  pyramidImg.setAttribute('loading', 'lazy')
  pyramidDiv.append(pyramidImg)

  let infoContainer = document.createElement('div')
  infoContainer.classList.add('infoContainer')

  let policiesDiv = document.createElement('div')
  policiesDiv.classList.add('policiesDiv')

  // let policiesTitle = document.createElement('h3')
  // policiesTitle.textContent = 'Information'
  // policiesDiv.append(policiesTitle)

  let policiesList = document.createElement('ul')
  let policies = ['Privacy Policy', 'Terms of Service', 'Who we are']

  policies.forEach((policy) => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.setAttribute('href', '#')
    a.textContent = policy
    li.append(a)
    policiesList.append(li)
  })
  policiesDiv.append(policiesList)
  infoContainer.append(policiesDiv)

  let copyrightDiv = document.createElement('div')
  let copyrightLink = document.createElement('a')
  let copyrightImg = document.createElement('img')
  let copyrightP = document.createElement('p')
  copyrightDiv.classList.add('copyrightDiv')
  copyrightLink.classList.add('copyrightLink')
  copyrightImg.classList.add('copyrightImg')
  copyrightLink.setAttribute('href', '#')
  copyrightImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1728733783/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/Goblin%20Store%20Logos/Favicon_Goblin_Store_skp6wk.png'
  )
  copyrightImg.setAttribute('alt', 'Goblin Heavy Metal Store Logo')
  copyrightImg.setAttribute('loading', 'lazy')
  copyrightP.textContent =
    '© 2024 Goblin Heavy Metal Store. All rights reserved.'

  copyrightLink.append(copyrightImg)
  copyrightDiv.append(copyrightLink, copyrightP)
  infoContainer.append(copyrightDiv)

  let socialDiv = document.createElement('div')
  socialDiv.classList.add('socialDiv')

  // let socialTitle = document.createElement('h3')
  // socialTitle.textContent = 'Follow Us'
  // socialDiv.append(socialTitle)

  let socialIcons = [
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1729810104/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/Icons/facebook-logo-facebook-icon-transparent-free-png_ggm8hf.webp',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1729809860/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/Icons/spotify-logo-spotify-social-media-icon-free-png_cyi4rb.webp',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1729809894/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/Icons/img.icons8_eb4fk6.png',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1729810137/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/Icons/instagram-logo-instagram-icon-transparent-free-png_pdplnz.webp',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1729810183/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/Icons/twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x-social-media-icon-free-png_myhtpd.webp',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1729810214/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/Icons/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png_y0s4yb.webp'
  ]

  let socialLink = [
    'Facebook icon',
    'Spotify icon',
    'YouTube icon',
    'Instagram icon',
    'Twitter icon',
    'Tik Tok icon'
  ]

  let socialList = document.createElement('ul')

  socialIcons.forEach((icon, i) => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    let img = document.createElement('img')
    img.classList.add('footerIcon')
    img.setAttribute('src', icon)
    img.setAttribute('alt', socialLink[i])
    img.setAttribute('loading', 'lazy')
    a.setAttribute('href', '#')

    a.append(img)
    li.append(a)
    socialList.append(li)
  })
  socialDiv.append(socialList)
  infoContainer.append(socialDiv)

  let zombieDiv = document.createElement('div')
  zombieDiv.classList.add('zombieDiv')
  let zombieImg = document.createElement('img')
  zombieImg.classList.add('zombieImg', 'header-footer-img')
  zombieImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dd0zwrz0b/image/upload/v1729021306/Project%202%20%7C%20Filters%20shopping:%20Goblin%20Heavy%20Metal%20Store/BG%20images/Eddie_main_qdquoh.png'
  )
  zombieImg.setAttribute('alt', 'Zombie walking animation')
  zombieImg.setAttribute('loading', 'lazy')
  zombieDiv.append(zombieImg)

  const footer = document.querySelector('footer')
  infoContainer.append(policiesDiv, copyrightDiv, socialDiv)
  containerFooterDiv.append(pyramidDiv, infoContainer, zombieDiv)
  footer.append(containerFooterDiv)
}
