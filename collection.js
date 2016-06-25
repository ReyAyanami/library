const Item = require('./item.js');

class Collection extends Item {
  constructor(title, collection = []) {
    super(title);
    this.collection = collection;
  }
  getItems() {
    return this.collection;
  }
  addItem(item) {
    this.removeItem(item);
    this.collection.push(item);
    return this;
  }
  removeItem(item) {
    this.collection = this.collection.filter(function(elm) {
      return elm !== item;
    });
    return this;
  }
  mapBy(prop) {
    return this.collection.map(function(elem) {
      return elem[prop];
    });
  }
  filterBy(prop, value) {
    return this.collection.filter(function(elem) {
      if (value !== undefined) {
        return elem[prop] === value;
      } else {
        return !!elem[prop];
      }
      // return value ? elem[prop] === value : !!elem[prop];
    });
  }
}

module.exports = Collection;
