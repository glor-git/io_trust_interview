import { describe, expect, test } from 'vitest'

const add = (a: number, b: number) => a + b
const multiply = (a: number, b: number) => a * b

describe('math utils', () => {
  test('adds numbers', () => {
    expect(add(2, 3)).toBe(5)
  })

  test('multiplies numbers', () => {
    expect(multiply(4, 3)).toBe(12)
  })
})
