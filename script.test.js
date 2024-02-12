const path = require('path');
const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} = require(path.join(__dirname, 'script.js'));


it('capitalize function: capitalizes the first letter of the string', () => {
    expect(capitalize('house')).toBe('House')
    expect(capitalize('this is cool')).toBe('This is cool')
    expect(capitalize('')).toBe('')
})

it('reverseString function: takes a string and return it reversed', () => {
    expect(reverseString('hi')).toBe('ih')
    expect(reverseString('')).toBe('')
    expect(reverseString('I love you')).toBe('uoy evol I')
})

it('calculator: takes two numbers and return the basic operation calculation', () => {
    expect(calculator.add(2, 1)).toBe(3)
    expect(calculator.add(0, 5)).toBe(5)
    expect(calculator.subtract(5, 4)).toBe(1)
    expect(calculator.subtract(4, 9)).toBe(-5)
    expect(calculator.multiply(2, 3)).toBe(6)
    expect(calculator.multiply(5, 0)).toBe(0)
    expect(calculator.divide(6, 3)).toBe(2)
    expect(calculator.divide(5, 0)).toBe(NaN)
    expect(calculator.divide(0, 8)).toBe(0)
})

it('caesarCipher function: take a string and returns the encrypted string using Caesar Cipher', () => {
    expect(caesarCipher('hi', 1)).toBe('ij')
    expect(caesarCipher('H', 1)).toBe('I')
    expect(caesarCipher('Hey, you', 1)).toBe('Ifz, zpv')
    expect(caesarCipher('z', 1)).toBe('a')
    expect(caesarCipher('a', 2)).toBe('c')
})

it('analyzeArray function: takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})