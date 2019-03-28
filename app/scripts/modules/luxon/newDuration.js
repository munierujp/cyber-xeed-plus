import { Duration } from 'luxon'

export default function (value, options) {
  if (typeof value === 'string') {
    return Duration.fromISO(value, options)
  } else if (typeof value === 'number') {
    return Duration.fromMillis(value, options)
  }
  return Duration.fromObject(value)
}
