import isNegativeDuration from './isNegativeDuration'

export default function (duration, pattern) {
  if (isNegativeDuration(duration)) {
    return `-${duration.negate().toFormat(pattern)}`
  } else {
    return duration.toFormat(pattern)
  }
}
