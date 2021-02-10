export class Site{
  constructor(selector){
    this.$el = document.querySelector(selector)
  }
  render(model){
    this.$el.innerHtml = ''
    model.forEach(element => {
      this.$el.insertAdjacentHTML('beforeend', element.toHtml())
    })
  }
}