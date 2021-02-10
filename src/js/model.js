import { TextElement, TitleElement, FormInputElement, FormButtonElement } from './elements/Elements'
import { Block } from './elements/Block'

export const model = [
  new Block([
    new TextElement('Test', {
      styles: {
        color: 'green'
      }
    }),
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
  }),
  new Block([
    new FormInputElement({}),
    new FormButtonElement('Submit', {
      attributes: {
        type: 'submit'
      }
    })
  ], 
  {
    tag: 'form',
  })
]