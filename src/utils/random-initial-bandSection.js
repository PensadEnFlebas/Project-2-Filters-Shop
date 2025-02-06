export function getRandomCards(array, count, filterFunction = null) {
  const filteredArray = filterFunction ? array.filter(filterFunction) : array

  if (filteredArray.length <= count) {
    return [...filteredArray]
  }

  const randomItems = []
  const uniqueItems = new Set()

  while (randomItems.length < count) {
    const randomIndex = Math.floor(Math.random() * filteredArray.length)
    const randomItem = filteredArray[randomIndex]

    if (!uniqueItems.has(randomIndex)) {
      uniqueItems.add(randomIndex)
      randomItems.push(randomItem)
    }
  }

  return randomItems
}
