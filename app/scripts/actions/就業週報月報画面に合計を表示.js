import WeeklyReportTable from '../modules/WeeklyReportTable'

export default function () {
  const tables = findWeeklyReportTables()
  tables.forEach(table => {
    const row = table.toTotalRowElement()
    table.appendChild(row)
  })
}

function findWeeklyReportTables () {
  return Array.from(document.getElementsByClassName('ap_table'))
    .filter(WeeklyReportTable.isWeeklyReportTable)
    .map(WeeklyReportTable.of)
}
