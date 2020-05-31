const normalizeText = (text) => text
  .trim()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase()
  .split(' ')[0]

const generateUsername = (idNumber, firstName, lastName) => {
  const name = normalizeText(firstName)
  const surname = normalizeText(lastName)
  const identifier = idNumber.toString().slice(-4)

  return `${name}.${surname}.${identifier}`
}

module.exports = {
  generateUsername
}
