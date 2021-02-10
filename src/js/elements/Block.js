import { HTML } from './base/HTML'

export class Block extends HTML {
  constructor(elements = [], options = {}){
    super(options)
    this.elements = elements
  }
  toHtml(){
    const html = this.elements.map(elem => {
      return elem.toHtml()
    }).join('')

    const { tag = 'div' } = this.options
    return `<${tag} ${this.buildClasses()} ${this.buildCSS()}>${html}</${tag}>`
  }
}