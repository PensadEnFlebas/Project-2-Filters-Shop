//* IMPORTS

import { albumsData, albumProperties } from '../data/database'
import { createButtons } from './search-reset-buttons-new'

function createFormFields(albumProperties, albumsData) {
  const calculateRanges = (
    min,
    max,
    step,
    lastStart,
    includeSymbol = false
  ) => {
    const ranges = []
    const priceSymbol = includeSymbol ? '€' : ''
    const currentYear = new Date().getFullYear()

    for (let i = min; i < lastStart; i += step) {
      const end = includeSymbol ? i + step - 0.01 : i + step - 1
      const text = includeSymbol
        ? `${i}-${end.toFixed(2)} ${priceSymbol}`
        : `${i}-${end} ${priceSymbol}`

      ranges.push({
        value: [i, end],
        text: text
      })
    }

    const lastText =
      max === currentYear ? `${lastStart}-present` : `${lastStart}-${max}`
    ranges.push({
      value: [lastStart, max],
      text: `${lastText} ${priceSymbol}`
    })

    return ranges
  }

  return albumProperties.map((property) => {
    switch (property) {
      case 'bandName':
      case 'title':
        return {
          name: property,
          type: 'input',
          label: property === 'bandName' ? 'Band Name' : 'Album Title'
        }

      case 'year': {
        const years = albumsData.map((album) => album.year)
        const minYear = Math.min(...years)
        const maxYear = Math.max(...years)
        return {
          name: property,
          type: 'select',
          label: 'Year',
          options: [
            { value: '', text: '' },
            ...calculateRanges(minYear, maxYear, 5, 2024)
          ]
        }
      }

      case 'price': {
        const prices = albumsData.map((album) => album.price)
        const minPrice = Math.floor(Math.min(...prices))
        const maxPrice = Math.ceil(Math.max(...prices))
        return {
          name: property,
          type: 'select',
          label: 'Price',
          options: [
            { value: '', text: '' },
            ...calculateRanges(minPrice, maxPrice, 5, 50, true)
          ]
        }
      }

      case 'genre':
        return {
          name: property,
          type: 'select',
          label: 'Genre',
          options: [
            { value: '', text: '' },
            ...new Set(albumsData.flatMap((album) => album.genre))
          ]
        }

      case 'bandCountry':
        return {
          name: property,
          type: 'select',
          label: 'Country',
          options: [
            { value: '', text: '' },
            ...new Set(albumsData.flatMap((album) => album.bandCountry))
          ]
        }

      case 'length':
        return {
          name: property,
          type: 'select',
          label: 'Length',
          options: [
            { value: '', text: '' },
            ...new Set(albumsData.map((album) => album.length))
          ]
        }

      case 'type':
        return {
          name: property,
          type: 'select',
          label: 'Type',
          options: [
            { value: '', text: '' },
            ...new Set(albumsData.map((album) => album.type))
          ]
        }

      case 'rate':
        return {
          name: property,
          type: 'select',
          label: 'Rate',
          options: [
            { value: '', text: '' },
            ...Array.from({ length: 5 }, (_, i) => {
              const guitars = '🎸'.repeat(i + 1)
              return { value: i + 1, text: guitars }
            })
          ]
        }
    }
  })
}

export const formFields = createFormFields(albumProperties, albumsData)

export function createForm() {
  const main = document.querySelector('main')
  const form = document.createElement('form')
  form.classList.add('search-form', 'hidden')
  const overlay = document.createElement('div')
  overlay.classList.add('overlay', 'hidden')

  formFields.forEach((field) => {
    const formField = document.createElement('div')
    formField.classList.add('form-field')

    const label = document.createElement('label')
    label.htmlFor = field.name
    label.textContent = field.label

    let inputElement

    if (field.type === 'input') {
      inputElement = document.createElement('input')
      inputElement.type = 'text'
      inputElement.name = field.name
      inputElement.id = field.name
      inputElement.placeholder = `Enter ${field.label.toLowerCase()}`
    } else if (field.type === 'select') {
      inputElement = document.createElement('select')
      inputElement.name = field.name
      inputElement.id = field.name

      field.options.forEach((option) => {
        const optionElement = document.createElement('option')
        if (typeof option === 'object') {
          optionElement.value = JSON.stringify(option.value)
          optionElement.textContent = option.text
        } else {
          optionElement.value = option
          optionElement.textContent = option
        }
        inputElement.appendChild(optionElement)
      })
    }

    formField.append(label, inputElement)
    form.appendChild(formField)
  })

  createButtons(
    form,
    'FIND IT',
    './src/assets/Metalhead Playmobil.gif',
    'findItButton',
    'EXIT',
    './src/assets/Exit Animated.gif',
    'exitButton'
  )

  overlay.appendChild(form)
  main.appendChild(overlay)
}
