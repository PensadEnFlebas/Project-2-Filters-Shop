//? IMPORTS

import { BANDS, albumsData } from './data/database.js'
import { HEADER } from './layouts/header.js'
import { mainTitle } from './layouts/body-main/mainTitle.js'

import { getShoppingBasket } from './components/shopping-basket.js'
import { createButtons } from './components/search-reset-buttons.js'
const main = document.querySelector('main')

import {
  createCardSection,
  createBandCard
} from './components/band-album-cards.js'
import { getRandomCards } from './utils/random-initial-bandSection.js'

import { createForm } from './components/search-form.js'

import { FOOTER } from './layouts/footer.js'

HEADER()
mainTitle()
getShoppingBasket()
createButtons(
  main,
  'SEARCH',
  './src/assets/Search Menu Eye.gif',
  'searchButton',
  'RESET',
  './src/assets/Reset Button Vinyl.gif',
  'resetButton'
)
createCardSection()
createBandCard(getRandomCards(BANDS, 5), albumsData, 3)
createForm()
FOOTER()
