/* eslint-env mocha */

import assert from 'power-assert'
import { Duration } from 'luxon'
import isNegativeDuration from '../../../../app/scripts/modules/luxon/isNegativeDuration'

describe('isNegativeDuration()', () => {
  describe('when duration is negative', () => {
    it('should return true', () => {
      const duration = Duration.fromMillis(-1)

      assert.strictEqual(isNegativeDuration(duration), true)
    })
  })

  describe('when duration is positive', () => {
    it('should return false', () => {
      const duration = Duration.fromMillis(1)

      assert.strictEqual(isNegativeDuration(duration), false)
    })
  })

  describe('when duration is zero', () => {
    it('should return false', () => {
      const duration = Duration.fromMillis(0)

      assert.strictEqual(isNegativeDuration(duration), false)
    })
  })
})
