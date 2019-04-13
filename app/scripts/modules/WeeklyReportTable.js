import newDuration from './luxon/newDuration'
import formatDuration from './luxon/formatDuration'

export default class WeeklyReportTable {
  constructor (table) {
    this.table = table
    this.colNames = getColNames(table)
    this.dataRows = getDataRowElements(table)
  }

  static of (table) {
    return new WeeklyReportTable(table)
  }

  static isWeeklyReportTable (element) {
    // NOTE: 本来はidやclassで判定すべきだが、一意に特定できるものがないのでカラム名で判定している
    const colNames = getColNames(element)
    return colNames.some(name => name === '日付')
  }

  toTotalRowElement () {
    const row = document.createElement('tr')
    row.classList.add('ap_tr_base')
    const cells = this.colNames.map((colName, i) => {
      if (i === 0) {
        return createCellElement('合計', 'left')
      }
      const values = this.dataRows
        .map(row => row.querySelector(`td:nth-child(${i + 1})`))
        .map(cell => cell.textContent)
      if (values.some(isTimeString)) {
        const duration = values
          .filter(isTimeString)
          .map(parseTimeString)
          .reduce((a, b) => a.plus(b), newDuration(0))
        const value = formatDuration(duration, 'h:mm')
        return createCellElement(value, 'right')
      }
      return createCellElement(' ', 'left')
    })
    cells.forEach(cell => row.append(cell))
    return row
  }

  appendChild (child) {
    return this.table.appendChild(child)
  }
}

function getColNames (table) {
  return Array.from(table.querySelectorAll('.ap_tr_title td'))
    .map(cell => cell.textContent)
}

function getDataRowElements (table) {
  return Array.from(table.querySelectorAll('.ap_tr_base'))
}

function createCellElement (value, align) {
  const cell = document.createElement('td')
  cell.setAttribute('align', align)
  cell.setAttribute('nowrap', '')
  cell.textContent = value
  return cell
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
