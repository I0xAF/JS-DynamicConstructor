import { HTML } from './base/HTML'
import { $Builder } from '../_builder'

export class Element extends HTML{
  constructor(type, value, options, defaultTag = 'div'){
    super(options)
    this.type = type
    this.value = value
    if(!options.tag) this.options.tag = defaultTag
  }
  toHtml(){
    return $Builder.CreateHTML(this, this.value)
  }
}

export class TitleElement extends Element{
  constructor(value, options){
    super('title', value, options, 'h1')
  }
}

export class TextElement extends Element{
  constructor(value, options){
    super('text', value, options, 'p')
  }
}

export class FormInputElement extends Element{
  constructor(options){
    super('field', '', options, 'input')
    //Не закрываем тэг при построении ( Refactor )
    this.options.closing = false
  }
}

export class FormButtonElement extends Element{
  constructor(value, options){
    super('button', value, options, 'button')
  }
}