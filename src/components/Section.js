export default class Section {
  constructor({ items, renderer }, container) {
    this.items = items;
    this.renderer = renderer;
    //this.cardSelector = containerSelector;
    this.container = document.querySelector(container); //(".cards__list");
  }

  // renderItems() {
  //   this.items.forEach(this.renderer);
  // }

  renderItems() {
    this.items.forEach((item) => this.renderer(item));
  }
  // renderItems() {
  //   console.log(this.items);
  //   this.items.forEach((item) => {
  //     const card = this.renderer(item);
  //     this.addItem(card);
  //   });
  // }

  addItem(item) {
    this.container.prepend(item); // <--- and here we make a prepend
  }
}
