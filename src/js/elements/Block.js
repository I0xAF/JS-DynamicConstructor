import { HTML } from './base/HTML'
import { $Builder } from '../_builder'

export class Block extends HTML {
  constructor(elements = [], options = {}){
    super(options)
    this.elements = elements
    this.type = 'block'
  }
  toHtml(){
    return $Builder.CreateHTML(this, '')
  }
}