const capitalize = (str) => {
    const firstLetter = str.charAt(0).toUpperCase();
    const restOfTheWord = str.slice(1);
    return firstLetter + restOfTheWord
}

const reverseString = (str) => {
    const reversedArray = []
    const strArray = str.split('')
    strArray.forEach((char) => {
        reversedArray.unshift(char)
    });
    return reversedArray.join('')
}

const calculator = {
    add : (num1, num2) => num1+num2,
    subtract : (num1, num2) => num1-num2,
    multiply : (num1, num2) => num1*num2,
    divide : (num1, num2) => num2 === 0 ? NaN : num1/num2,
}

const caesarCipher = (str, shift) => {
    const smallLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const encryptedIndex = (charIndex, shift) => ((charIndex + shift) < 26) ? (charIndex + shift) : (charIndex + shift -26)
    const encryptedArray = str.split('').map((char) => {
        if (smallLetters.includes(char)) {
            const charIndex = smallLetters.indexOf(char)
            return smallLetters[encryptedIndex(charIndex, shift)]
        } else if (capitalLetters.includes(char)) {
            const charIndex = capitalLetters.indexOf(char)
            return capitalLetters[encryptedIndex(charIndex, shift)]
        } else return char
    })
    return encryptedArray.join('')
}

const analyzeArray = (arr) => {
    const result = {'average': null, 'min': null, 'max': null, 'length': null}
    result['average'] = arr.reduce((acc, val) => acc + val, 0)/arr.length
    result['min'] = Math.min(...arr)
    result['max'] = Math.max(...arr)
    result['length'] = arr.length
    return result
}


module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}