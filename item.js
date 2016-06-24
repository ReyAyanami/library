class Item {
  constructor(title) {
    this.setTitle(title);
  }
  setTitle(title) {
    this.title = title;
    return this;
  }
  getTitle() {
    return this.title;
  }
}

module.exports = Item;
