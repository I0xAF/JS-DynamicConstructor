export function css(styles = {}){
  return keysToString(styles, key => `${key}: ${styles[key]}`, ';') + ';'
}
export function classes(classes = []){
  if(typeof classes === 'string') return classes
  return classes.join(' ')
}
export function attributes(attributes = []){
  return keysToString(attributes, attr => `${attr}="${attributes[attr]}"`, ' ')
}

export function makeID(length) {
  let result             = ''
  const characters       = 'abcdefghijklmnopqrstuvwxyz0123456789' //ABCDEFGHIJKLMNOPQRSTUVWXYZ
  for (let i = 0; i < length; i++)
     result += characters.charAt(Math.floor(Math.random() * characters.length))
  return result
}

function keysToString(array, mapFunc, separator = ''){
  if (typeof array === 'string') return array
  return Object.keys(array).map(mapFunc).join(separator)
}