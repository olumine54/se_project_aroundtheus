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
  // renderer() {
  //   const card = new Card(cardData, "#card-template");
  // }
  addItem() {
    this.container.prepend(item);
  }
}
