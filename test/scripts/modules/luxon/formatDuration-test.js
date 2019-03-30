/* eslint-env mocha */

import assert from 'power-assert'
import { Duration } from 'luxon'
import formatDuration from '../../../../app/scripts/modules/luxon/formatDuration'

describe('formatDuration()', () => {
  describe('when duration is positive', () => {
    it('should return formated string', () => {
      const years = 3
      const months = 6
      const weeks = 1
      const days = 4
      const hours = 12
      const minutes = 30
      const seconds = 5
      const obj = {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds
      }
      const duration = Duration.fromObject(obj)
      const text = formatDuration(duration, 'y,M,d,h,m,s')

      assert.strictEqual(text, [years, months, weeks * 7 + days, hours, minutes, seconds].join(','))
    })
  })

  describe('when duration is negative', () => {
    it("should return formated string which have '-' prefix", () => {
      const years = 3
      const months = 6
      const weeks = 1
      const days = 4
      const hours = 12
      const minutes = 30
      const seconds = 5
      const obj = {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds
      }
      const duration = Duration.fromObject(obj).negate()
      const text = formatDuration(duration, 'y,M,d,h,m,s')

      assert.strictEqual(text, `-${[years, months, weeks * 7 + days, hours, minutes, seconds].join(',')}`)
    })
  })
})
