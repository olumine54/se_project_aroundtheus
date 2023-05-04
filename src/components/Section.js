export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    //this.cardSelector = containerSelector;
    this.container = document.querySelector(".cards__list");
  }
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
    // this.container.prepend(item); // <--- and here we make a prepend
  }
}
