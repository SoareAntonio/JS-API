const validateNumber = (value) => {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new TypeError(`Value must be a valid number, got ${typeof value}`)
  }
}

export const add = (a, b) => validateNumber(a) + validateNumber(b)
export const substract = (a, b) => validateNumber(a) - validateNumber(b)
