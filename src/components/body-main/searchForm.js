export { searchForm }

const formInputs = [
  'band',
  'album',
  'year',
  'genre',
  'country',
  'length',
  'type',
  'price',
  'rate'
]

function searchForm() {
  let main = document.querySelector('main')
  let form = document.createElement('form')
  form.classList.add('form')

  formInputs.forEach((formInput) => {
    let inputDiv = document.createElement('div')
    inputDiv.setAttribute('id', `${formInput}Div`)

    let inputLabel = document.createElement('label')
    inputLabel.setAttribute('for', `${formInput}Input`)
    inputLabel.textContent =
      formInput.charAt(0).toUpperCase() + formInput.slice(1)

    let input = document.createElement('input')
    input.setAttribute('id', `${formInput}Input`)
    input.setAttribute('placeholder', formInput)
    input.setAttribute('type', 'text')

    inputDiv.append(inputLabel, input)
    form.append(inputDiv)
  })

  let submitButton = document.createElement('button')
  submitButton.classList.add('submitButton')

  const submitButtonP = document.createElement('p')
  submitButtonP.textContent = `FIND THEM`

  let submitButtonIcon = document.createElement('img')
  submitButtonIcon.classList.add('submitButtonIcon')
  submitButtonIcon.setAttribute('src', './src/assets/Metalhead Playmobil.gif')
  submitButtonIcon.setAttribute('alt', 'Metalhead Playmobil Icon')
  submitButtonIcon.setAttribute('loading', 'lazy')

  submitButton.append(submitButtonP, submitButtonIcon)
  form.append(submitButton)
  main.append(form)
}
