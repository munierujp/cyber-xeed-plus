import getStartOfMonth from '../modules/luxon/getStartOfMonth'
import getEndOfMonth from '../modules/getEndOfMonth'

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
  cell.setAttribute('valign', 'bottom')
  const button = createCurrentMonthButtonElement(searchButton)
  cell.append(button)
  return cell
}

function createCurrentMonthButtonElement (searchButton) {
  const button = document.createElement('input')
  button.setAttribute('type', 'button')
  button.setAttribute('value', '今月')
  button.addEventListener('click', () => {
    const startDateForm = getStartDateFormElement()
    const startDate = createStartDate()
    startDateForm.value = startDate
    const endDateForm = getEndDateFormElement()
    const endDate = createEndDate()
    endDateForm.value = endDate
    searchButton.click()
  })
  return button
}

function getStartDateFormElement () {
  return document.getElementById('txtYmdStart')
}

function createStartDate () {
  return getStartOfMonth().toFormat('yyyyMMdd')
}

function getEndDateFormElement () {
  return document.getElementById('txtYmdEnd')
}

function createEndDate () {
  return getEndOfMonth().toFormat('yyyyMMdd')
}
