//* IMPORTS

import { BANDS, albumsData } from '../data/database'

export function filterBandsAndAlbums(formValues) {
  const cleanedValues = cleanFormValues(formValues)

  const filteredBands = BANDS.filter((band) => {
    if (
      cleanedValues.bandName &&
      !band.bandName
        .toLowerCase()
        .includes(cleanedValues.bandName.toLowerCase())
    ) {
      return false
    }

    if (
      cleanedValues.bandCountry &&
      band.country !== cleanedValues.bandCountry
    ) {
      return false
    }

    return true
  })

  const filteredAlbums = albumsData.filter((album) => {
    if (filteredBands.length > 0) {
      const bandNames = filteredBands.map((band) => band.bandName)
      if (!bandNames.includes(album.bandName)) {
        return false
      }
    }

    if (cleanedValues.title) {
      if (cleanedValues.title.toLowerCase() !== album.title.toLowerCase()) {
        return false
      }
    }

    if (cleanedValues.year) {
      const [minYear, maxYear] = JSON.parse(cleanedValues.year)
      if (album.year < minYear || album.year > maxYear) {
        return false
      }
    }

    if (cleanedValues.price) {
      const [minPrice, maxPrice] = JSON.parse(cleanedValues.price)
      if (album.price < minPrice || album.price > maxPrice) {
        return false
      }
    }

    if (
      cleanedValues.genre &&
      !album.genre.some(
        (g) => g.toLowerCase() === cleanedValues.genre.toLowerCase()
      )
    ) {
      return false
    }

    if (cleanedValues.length && album.length !== cleanedValues.length) {
      return false
    }

    if (cleanedValues.type && album.type !== cleanedValues.type) {
      return false
    }

    if (cleanedValues.rate && album.rate !== parseInt(cleanedValues.rate, 10)) {
      return false
    }

    return true
  })

  const bandsWithAlbums = filteredBands.filter((band) => {
    const bandAlbums = filteredAlbums.filter(
      (album) => album.bandName === band.bandName
    )
    return bandAlbums.length > 0
  })

  return { bandsWithAlbums, filteredAlbums }
}

function cleanFormValues(formValues) {
  const cleanedValues = {}

  for (const key in formValues) {
    const value = formValues[key]

    if (value && value !== '""' && value !== '[]') {
      cleanedValues[key] = value.trim ? value.trim() : value
    }
  }

  return cleanedValues
}
