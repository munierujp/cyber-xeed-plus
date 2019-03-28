import getStartOfYear from '../modules/getStartOfYear'
import getNow from '../modules/luxon/getNow'

export default function () {
  const searchButton = getSearchButtonElement()
  const currentMonthButtonCell = createCurrentMonthButtonCellElement(searchButton)
  const searchButtonCell = searchButton.parentElement
  searchButtonCell.parentNode.insertBefore(currentMonthButtonCell, searchButtonCell)
}

function getSearchButtonElement () {
  return document.getElementById('cmdSearch')
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
  button.setAttribute('value', '今年')
  button.addEventListener('click', () => {
    const startMonthForm = getStartMonthFormElement()
    const startMonth = createStartMonth()
    startMonthForm.value = startMonth
    const endMonthForm = getEndDMonthFormElement()
    const endMonth = createEndDMonth()
    endMonthForm.value = endMonth
    searchButton.click()
  })
  return button
}

function getStartMonthFormElement () {
  return document.getElementById('cboYM1')
}

function createStartMonth () {
  return getStartOfYear().toFormat('yyyyMM')
}

function getEndDMonthFormElement () {
  return document.getElementById('cboYM2')
}

function createEndDMonth () {
  return getNow().toFormat('yyyyMM')
}
