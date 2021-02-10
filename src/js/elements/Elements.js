import { HTML } from './base/HTML'

export class Element extends HTML{
  constructor(type, value, options){
    super(options)
    this.type = type
    this.value = value
  }
  toHtml(){
    return new Error('HTML не реализован!')
  }
}

export class TitleElement extends Element{
  constructor(value, options){
    super('title', value, options)
  }
  toHtml(){
    const {tag = 'h2'} = this.options
    return `<${tag} ${this.buildCSS()}>${this.value}</${tag}>`
  }
}

export class TextElement extends Element{
  constructor(value, options){
    super('text', value, options)
  }
  toHtml(){
    return `<p ${this.buildCSS()}>${this.value}</p>`
  }
}