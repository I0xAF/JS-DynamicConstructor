export class Site{
  constructor(selector){
    this.$el = document.querySelector(selector)
  }
  render(model){
    this.$el.innerHtml = ''
    model.forEach(element => this.#renderElement(element))
  }
  renderBlock(parentNode, parentElement){
    parentElement.elements.forEach(element => this.#renderElement(element, parentNode))
  }
  #renderElement(element, node = this.$el){
    node.insertAdjacentHTML('beforeend', element.toHtml())
    const added = this.#getElementByHID(element.options.$hID)
    this.#setEvents(element.options.events, added)
    if(element.type === 'block'){
      this.renderBlock(this.#getElementByHID(element.options.$hID), element)
    }
  }
  #getElementByHID(hid){
    return this.$el.querySelector(`#el [h-id="${hid}"]`)
  }
  #setEvents(events, node){
    if(events) Object.keys(events).forEach(eKey => node.addEventListener(eKey, events[eKey]))
  }
}