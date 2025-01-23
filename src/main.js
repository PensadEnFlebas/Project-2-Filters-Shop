//? IMPORTS

import { BANDS, albumsData } from './data/database.js'

import { HEADER } from './layouts/header.js'
HEADER()

import { mainTitle } from './layouts/body-main/mainTitle.js'
mainTitle()

import { createButtons } from './components/search-reset-buttons-new.js'
const main = document.querySelector('main')
createButtons(
  main,
  'SEARCH',
  './src/assets/Search Menu Eye.gif',
  'searchButton',
  'RESET',
  './src/assets/Reset Button Vinyl.gif',
  'resetButton'
)

import {
  createCardSection,
  createBandCard
} from './components/band-album-cards-new.js'
import { getRandomCards } from './utils/random-initial-bandSection-new.js'
createCardSection()
createBandCard(getRandomCards(BANDS, 5), albumsData, 3)

import { FOOTER } from './layouts/footer.js'
FOOTER()
