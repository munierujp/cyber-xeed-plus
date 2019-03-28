import { DateTime } from 'luxon'

export default function () {
  return DateTime.local().endOf('month')
}
