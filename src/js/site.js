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
    this.#setEvents(element, added)
    if( element.type === 'block' ) this.renderBlock(added, element)
  }
  #getElementByHID(hid){
    return this.$el.querySelector(`#el [h-id="${hid}"]`)
  }
  #setEvents(element, node){
    const events = element.options.events
    if(events) Object.keys(events).forEach(eKey => node.addEventListener(eKey, events[eKey].bind({
      site: this,
      self: element
    })))
  }
}