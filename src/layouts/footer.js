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
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905187/Pyramid_main_ahg8yl_lo94bx.png'
  )
  pyramidImg.setAttribute('alt', 'Powerslave pyramid')
  pyramidImg.setAttribute('loading', 'lazy')
  pyramidDiv.appendChild(pyramidImg)

  let infoContainer = document.createElement('div')
  infoContainer.classList.add('infoContainer')

  let policiesDiv = document.createElement('div')
  policiesDiv.classList.add('policiesDiv')

  let policiesList = document.createElement('ul')
  let policies = ['Privacy Policy', 'Terms of Service', 'Who we are']

  policies.forEach((policy) => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.setAttribute('href', '#')
    a.textContent = policy
    li.appendChild(a)
    policiesList.appendChild(li)
  })
  policiesDiv.appendChild(policiesList)
  infoContainer.appendChild(policiesDiv)

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
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905157/Favicon_Goblin_Store_skp6wk_cr326n.png'
  )
  copyrightImg.setAttribute('alt', 'Goblin Heavy Metal Store Logo')
  copyrightImg.setAttribute('loading', 'lazy')
  copyrightP.textContent =
    '© 2024 Goblin Heavy Metal Store. All rights reserved.'

  copyrightLink.appendChild(copyrightImg)
  copyrightDiv.append(copyrightLink, copyrightP)
  infoContainer.appendChild(copyrightDiv)

  let socialDiv = document.createElement('div')
  socialDiv.classList.add('socialDiv')

  let socialIcons = [
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905147/facebook-logo-facebook-icon-transparent-free-png_ggm8hf_vn0ulm.webp',
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905155/spotify-logo-spotify-social-media-icon-free-png_cyi4rb_pedqiw.webp',
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905148/img.icons8_eb4fk6_ieygho.png',
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905152/instagram-logo-instagram-icon-transparent-free-png_pdplnz_cz2bcf.webp',
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905153/twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x-social-media-icon-free-png_myhtpd_pmkkrp.webp',
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905150/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png_y0s4yb_nvfsp3.webp'
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

    a.appendChild(img)
    li.appendChild(a)
    socialList.appendChild(li)
  })
  socialDiv.appendChild(socialList)
  infoContainer.appendChild(socialDiv)

  let zombieDiv = document.createElement('div')
  zombieDiv.classList.add('zombieDiv')
  let zombieImg = document.createElement('img')
  zombieImg.classList.add('zombieImg', 'header-footer-img')
  zombieImg.setAttribute(
    'src',
    'https://res.cloudinary.com/dwjwglwsq/image/upload/v1735905179/Eddie_main_qdquoh_qlgpns.png'
  )
  zombieImg.setAttribute('alt', 'Zombie walking animation')
  zombieImg.setAttribute('loading', 'lazy')
  zombieDiv.appendChild(zombieImg)

  const footer = document.querySelector('footer')
  infoContainer.append(policiesDiv, copyrightDiv, socialDiv)
  containerFooterDiv.append(pyramidDiv, infoContainer, zombieDiv)
  footer.appendChild(containerFooterDiv)
}
