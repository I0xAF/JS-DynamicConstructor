import { css, classes, attributes } from '../../utils'
import { makeID } from '../../utils'

export class HTML{
  constructor(options = {}){
    this.options = options
    this.options.$hID = makeID(8)
  }
  toHtml(){
    return new Error('HTML не реализован!')
  }
  buildClasses(){
    return this.options.classes ? `class="${classes(this.options.classes)}"` : ''
  }
  buildCSS(){
    return this.options.styles ? `style="${css(this.options.styles)}"` : ''
  }
  buildAttributes(){
    return this.options.attributes ? `${attributes(this.options.attributes)}` : ''
  }
  buildID(){
    return this.options.$hID ? `h-id=${this.options.$hID}` : ''
  }
}