import { TextElement, TitleElement, FormInputElement, FormButtonElement } from './elements/Elements'
import { Block } from './elements/Block'

export const model = [
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
    new TextElement('Text A', {
      styles: {
        'text-align': 'center',
        color: '#3e3e3e'
      }
    }),
    new TextElement('Text B', {
      styles: {
        'text-align': 'center',
        color: '#3e3e3e'
      }
    }),
    new Block([
      new Block([
        new Block([
          new TextElement('Text A', {
            styles: {
              'text-align': 'center',
              color: '#3e3e3e'
            }
          }),
          new Block()
        ])
      ])
    ])
  ], {
    styles: {
      display: 'flex',
      'justify-content': 'space-between',
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
    events:{
      'submit': function (event) {
        event.preventDefault();
        console.log(this);
      }
    }
  })
]