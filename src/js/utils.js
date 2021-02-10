export function css(styles = {}){
  if(typeof styles === 'string') return styles
  return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';')
}
export function classes(classes = []){
  if(typeof classes === 'string') return classes
  return Object.keys(classes).map(c => new String(c)).join(' ')
}