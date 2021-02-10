export class $Builder {
  static CreateHTML( element, innerHTML ){
    const { tag = 'div', closing = true } = element.options
    return `<${tag} ${element.buildID()} ${element.buildCSS()} ${element.buildClasses()} ${element.buildAttributes()}>${innerHTML}${closing ? `</${tag}>` : ''}`
  }
}