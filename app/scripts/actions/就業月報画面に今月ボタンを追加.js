import getNow from '../modules/luxon/getNow'

export default function () {
  const searchButton = getSearchButtonElement()
  const currentMonthButtonCell = createCurrentMonthButtonCellElement(searchButton)
  const searchButtonCell = searchButton.parentElement
  searchButtonCell.parentNode.insertBefore(currentMonthButtonCell, searchButtonCell)
}

function getSearchButtonElement () {
  return document.getElementById('cmdKensaku')
}

function createCurrentMonthButtonCellElement (searchButton) {
  const cell = document.createElement('td')
  cell.setAttribute('nowrap', true)
  const button = createCurrentMonthButtonElement(searchButton)
  cell.append(button)
  return cell
}

function createCurrentMonthButtonElement (searchButton) {
  const button = document.createElement('input')
  button.setAttribute('type', 'button')
  button.setAttribute('value', '今月')
  button.addEventListener('click', () => {
    const options = getOptionElements()
    const month = createCurrentMonth()
    options.forEach(option => {
      option.selected = option.value === month
    })
    searchButton.click()
  })
  return button
}

function getOptionElements () {
  const select = document.getElementById('cboYM')
  return Array.from(select.querySelectorAll('option'))
}

function createCurrentMonth () {
  return getNow().toFormat('yyyyMM')
}
