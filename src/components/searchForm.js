//* IMPORTS

import { BANDS } from '../data/database.js'
import { bandCard, albumCard } from './album-cards.js'
import { closeSearchMenu } from '../layouts/body-main/searchMenu.js'

export { searchForm }

const bandKeys = Object.keys(BANDS[0]).filter(
  (key) =>
    key !== 'bandPhoto' &&
    key !== 'albums' &&
    key !== 'flag' &&
    key !== 'bandLogo'
)

const albumKeys = Object.keys(BANDS[0].albums[0]).filter(
  (key) => key !== 'cover'
)

const formInputs = [...bandKeys, ...albumKeys]
const textInputs = ['bandName', 'title']
const selectInputs = [
  'country',
  'year',
  'genre',
  'length',
  'type',
  'price',
  'rate'
]

function selectInputOptions(property) {
  let options = new Set()
  if (property === 'country') {
    BANDS.forEach((band) => {
      options.add(band.country)
    })
  } else {
    BANDS.forEach((band) => {
      band.albums.forEach((album) => {
        let option = album[property]
        if (Array.isArray(option)) {
          option.forEach((opt) => options.add(opt))
        } else {
          options.add(option)
        }
      })
    })

    if (property === 'year') {
      let yearRanges = new Set()
      Array.from(options).forEach((year) => {
        let parsedyear = parseFloat(year)
        if (parsedyear < 1976) {
          yearRanges.add('1960-1975')
        } else if (parsedyear < 1981) {
          yearRanges.add('1975-1980')
        } else if (parsedyear < 1986) {
          yearRanges.add('1981-1985')
        } else if (parsedyear < 1991) {
          yearRanges.add('1986-1990')
        } else if (parsedyear < 1996) {
          yearRanges.add('1991-1995')
        } else if (parsedyear < 2001) {
          yearRanges.add('1996-2000')
        } else if (parsedyear < 2006) {
          yearRanges.add('2001-2005')
        } else if (parsedyear < 2011) {
          yearRanges.add('2006-2010')
        } else if (parsedyear < 2016) {
          yearRanges.add('2011-2015')
        } else if (parsedyear < 2021) {
          yearRanges.add('2016-2020')
        } else {
          yearRanges.add('2021-present')
        }
      })
      return Array.from(yearRanges).sort()
    } else if (property === 'price') {
      let priceRanges = new Set()
      Array.from(options).forEach((price) => {
        let parsedPrice = parseFloat(price)
        if (parsedPrice < 10) {
          priceRanges.add('0-9.99 €')
        } else if (parsedPrice < 15) {
          priceRanges.add('10-14.99 €')
        } else if (parsedPrice < 20) {
          priceRanges.add('15-19.99 €')
        } else if (parsedPrice < 25) {
          priceRanges.add('20-24.99 €')
        } else if (parsedPrice < 30) {
          priceRanges.add('25-29.99 €')
        } else {
          priceRanges.add('30 € or more')
        }
      })
      return Array.from(priceRanges).sort()
    } else if (property === 'rate') {
      return Array.from(options).sort()
    }
  }

  return Array.from(options)
}

function searchForm() {
  let main = document.querySelector('main')
  let form = document.createElement('form')

  formInputs.forEach((formInput) => {
    let formInputDiv = document.createElement('div')
    formInputDiv.classList.add('formInputDiv')

    let formInputLabel = document.createElement('label')
    formInputLabel.classList.add('formInputLabel')
    formInputLabel.setAttribute('for', `${formInput}Input`)
    if (formInput === 'bandName') {
      formInputLabel.textContent = 'Band Name'
    } else {
      formInputLabel.textContent =
        formInput.charAt(0).toUpperCase() + formInput.slice(1)
    }

    if (textInputs.includes(formInput)) {
      let textInput = document.createElement('input')
      textInput.setAttribute('type', 'text')
      textInput.setAttribute('id', `${formInput}Input`)
      formInputDiv.append(formInputLabel, textInput)
    } else {
      let selectInput = document.createElement('select')
      selectInput.setAttribute('id', `${formInput}Input`)

      let defaultOption = document.createElement('option')
      defaultOption.value = ''
      selectInput.appendChild(defaultOption)

      let options = selectInputOptions(formInput)

      options.forEach((option) => {
        let optionElement = document.createElement('option')
        optionElement.value = option
        optionElement.textContent = option
        selectInput.appendChild(optionElement)
      })

      formInputDiv.append(formInputLabel, selectInput)
    }

    form.appendChild(formInputDiv)
  })

  let submitButton = document.createElement('button')
  submitButton.classList.add('submitButton')

  let submitButtonP = document.createElement('p')
  submitButtonP.textContent = `FIND IT`

  let submitButtonIcon = document.createElement('img')
  submitButtonIcon.classList.add('submitButtonIcon')
  submitButtonIcon.setAttribute('src', './src/assets/Metalhead Playmobil.gif')
  submitButtonIcon.setAttribute('alt', 'Metalhead Playmobil Icon')
  submitButtonIcon.setAttribute('loading', 'lazy')

  submitButton.append(submitButtonP, submitButtonIcon)
  form.appendChild(submitButton)

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const filters = {}
    formInputs.forEach((formInput) => {
      const inputElement = document.getElementById(`${formInput}Input`)
      const inputValue = inputElement.value.trim()
      if (inputValue && inputValue !== '') {
        filters[formInput] = inputValue
      }
    })

    let bandSection = document.querySelector('.bandSection')
    if (!bandSection) {
      bandSection = document.createElement('section')
      bandSection.className = 'bandSection'
      document.querySelector('main').appendChild(bandSection)
    }
    bandSection.innerHTML = ''

    const filteredBands = BANDS.filter((band) =>
      band.albums.some((album) =>
        Object.entries(filters).every(([key, value]) => {
          if (key in band) {
            return band[key]
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          } else if (key in album) {
            return album[key]
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          }
          return false
        })
      )
    )

    if (Array.isArray(filteredBands) && filteredBands.length > 0) {
      filteredBands.forEach((band) => {
        const bandCardElement = bandCard(band)
        bandSection.appendChild(bandCardElement)

        const filteredAlbums = band.albums.filter((album) =>
          Object.entries(filters).every(([key, value]) => {
            if (key in band) {
              return band[key]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase())
            } else if (key in album) {
              return album[key]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase())
            }
            return false
          })
        )

        filteredAlbums.forEach((album) => {
          const albumCardElement = albumCard(album)
          bandCardElement.appendChild(albumCardElement)
        })
      })
    } else {
      let noResultsMessage = document.createElement('p')
      noResultsMessage.textContent = 'No bands or albums match your criteria.'
      bandSection.appendChild(noResultsMessage)
    }

    closeSearchMenu()
  })

  main.appendChild(form)
}
