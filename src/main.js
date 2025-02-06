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
  'https://res.cloudinary.com/dwjwglwsq/image/upload/v1738852817/Search_Menu_Eye_tqcujy.gif',
  'searchButton',
  'RESET',
  'https://res.cloudinary.com/dwjwglwsq/image/upload/v1738852818/Reset_Button_Vinyl_e3ea0w.gif',
  'resetButton'
)
createCardSection()
createBandCard(getRandomCards(BANDS, 5), albumsData, 3)
createForm()
FOOTER()
