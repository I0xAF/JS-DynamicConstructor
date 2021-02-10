import { css, classes } from '../../utils'

export class HTML{
  constructor(options = {}){
    this.options = options
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
}