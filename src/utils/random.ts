/**
 * Credit to [@sodiray](https://github.com/sodiray)
 * @copy https://github.com/sodiray/radash
 */

import { iterate } from './array'

/**
 * Generates a random number between min and max
 */
export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function uid(length: number = 32, specials: string = '') {
  const characters
    = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789${specials}`
  return iterate(
    length,
    (acc) => {
      return acc + characters.charAt(random(0, characters.length - 1))
    },
    '',
  )
}
