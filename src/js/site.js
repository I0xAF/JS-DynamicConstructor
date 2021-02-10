export class Site{
  constructor(selector){
    this.$el = document.querySelector(selector)
  }
  render(model){
    this.$el.innerHtml = ''
    model.forEach(element => {
      this.$el.insertAdjacentHTML('beforeend', element.toHtml())
      if(element.type === 'block'){
        this.renderBlock(this.#getElementByHID(element.options.$hID), element)
      }
    })
  }
  renderBlock(parentNode, parentElement){
    parentElement.elements.forEach(element => {
      parentNode.insertAdjacentHTML('beforeend', element.toHtml())
      if(element.type === 'block'){
        this.renderBlock(this.#getElementByHID(element.options.$hID), element)
      }
    })
  }
  #getElementByHID(hid){
    return this.$el.querySelector(`#el [h-id="${hid}"]`)
  }
}