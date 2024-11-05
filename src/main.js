//? IMPORTS

import { HEADER } from './components/header.js'
HEADER()
import { mainTitle } from './components/body-main/mainTitle.js'
mainTitle()
import { searchMenu } from './components/body-main/searchMenu.js'
searchMenu()
import { bandCard } from './components/body-main/album-cards.js'
bandCard('Ñu')
bandCard('Muro')
bandCard('Legion')
import { FOOTER } from './components/footer.js'
FOOTER()
