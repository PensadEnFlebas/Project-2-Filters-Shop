//* IMPORTS
import { BANDS } from '../data/database.js'
import { albumCard } from './album-cards.js'

export { randomBandSection }

function randomBandSection() {
  const main = document.querySelector('main')

  const randomBands = []
  const uniqueBands = [...new Set(BANDS.map((band) => band.bandName))]

  while (randomBands.length < 5 && uniqueBands.length > 0) {
    const randomIndex = Math.floor(Math.random() * uniqueBands.length)
    const randomBandName = uniqueBands.splice(randomIndex, 1)[0]
    randomBands.push(randomBandName)
  }

  const section = document.createElement('section')
  section.className = 'bandSection'
  const fragment = document.createDocumentFragment()

  randomBands.forEach((bandName) => {
    const bandData = BANDS.filter((band) => band.bandName === bandName)
    const randomAlbums = []

    while (randomAlbums.length < 3 && bandData[0]?.albums.length > 0) {
      const randomIndex = Math.floor(Math.random() * bandData[0].albums.length)
      const randomAlbum = bandData[0].albums.splice(randomIndex, 1)[0]
      randomAlbums.push(randomAlbum)
    }

    const bandInfo = bandData[0] || {}

    const bandArticle = document.createElement('article')
    bandArticle.className = 'bandArticle'

    const bandCardHeader = document.createElement('div')
    bandCardHeader.className = 'bandCardHeader'

    const bandCardBody = document.createElement('div')
    bandCardBody.className = 'bandCardBody'

    const bandLogo = document.createElement('img')
    bandLogo.className = 'bandLogo'
    bandLogo.setAttribute('src', bandInfo.bandLogo || '')
    bandLogo.setAttribute('alt', bandName + ' logo')
    bandLogo.setAttribute('loading', 'lazy')

    const bandPhoto = document.createElement('img')
    bandPhoto.className = 'bandPhoto'
    bandPhoto.setAttribute('src', bandInfo.bandPhoto || '')
    bandPhoto.setAttribute('alt', bandName + ' band photo')
    bandPhoto.setAttribute('loading', 'lazy')

    const bandFlag = document.createElement('img')
    bandFlag.className = 'bandFlag'
    bandFlag.setAttribute('src', bandInfo.flag || '')
    bandFlag.setAttribute('alt', bandInfo.country || '')
    bandFlag.setAttribute('loading', 'lazy')

    albumCard(randomAlbums, bandCardBody)

    bandCardHeader.append(bandLogo, bandPhoto, bandFlag)
    bandArticle.append(bandCardHeader, bandCardBody)
    fragment.appendChild(bandArticle)
  })

  section.appendChild(fragment)
  main.appendChild(section)
}
