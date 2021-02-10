import { TextElement, TitleElement } from './elements/Elements'
import { Block } from './elements/Block'

export const model = [
  new Block([
    new TextElement('Test', {}),
    new TextElement('Test2', {}),
    new Block([
      new TextElement('Test3', {})
    ])
  ]),
  new TitleElement('Some Title', {
    styles: {
      color: 'red',
      'text-align': 'center'
    }
  }),
  new TextElement('Some Text Element', {
    styles: {
      'text-align': 'center',
      color: '#3e3e3e'
    }
  })
]