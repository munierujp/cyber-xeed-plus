import newDuration from '../modules/luxon/newDuration'
import formatDuration from '../modules/luxon/formatDuration'

export default function () {
  const table = findTableElement()
  if (table) {
    const row = createTotalRowElement(table)
    table.append(row)
  }
}

function findTableElement () {
  const tables = Array.from(document.getElementsByClassName('ap_table'))
  return tables.find(table => {
    const colNames = getColNames(table)
    return colNames.some(name => name === '日付')
  })
}

function getColNames (table) {
  const headerCells = getHeaderCells(table)
  return headerCells.map(cell => cell.textContent)
}

function getHeaderCells (table) {
  return Array.from(table.querySelectorAll('.ap_tr_title td'))
}

function createTotalRowElement (table) {
  const row = document.createElement('tr')
  row.classList.add('ap_tr_base')
  const headerCells = getHeaderCells(table)
  const cells = headerCells.map((headerCell, i) => {
    if (i === 0) {
      return createCellElement('合計', 'left')
    }
    const values = getCellValues(table, i)
    if (values.some(isTimeString)) {
      const value = createCellValue(values)
      return createCellElement(value, 'right')
    }
    return createCellElement(' ', 'left')
  })
  cells.forEach(cell => row.append(cell))
  return row
}

function createCellElement (value, align) {
  const cell = document.createElement('td')
  cell.setAttribute('align', align)
  cell.setAttribute('nowrap', '')
  cell.textContent = value
  return cell
}

function getCellValues (table, i) {
  const rows = Array.from(table.querySelectorAll('.ap_tr_base'))
  const n = i + 1
  return rows
    .map(row => row.querySelector(`td:nth-child(${n})`))
    .map(cell => cell.textContent)
}

function createCellValue (values) {
  const duration = values
    .filter(isTimeString)
    .map(parseTimeString)
    .reduce((a, b) => a.plus(b), newDuration(0))
  return formatDuration(duration, 'h:mm')
}

function isTimeString (value) {
  return value.match(/^-?\d+:\d+$/)
}

function parseTimeString (value) {
  const values = value.split(':')
  const negative = value.startsWith('-')
  const hours = Number(values[0])
  const minutes = negative ? Number(values[1]) * -1 : Number(values[1])
  return newDuration({ hours, minutes })
}
