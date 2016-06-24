const Item = require('./item.js');

class Country extends Item {
  constructor(title, iso) {
    super(title);
    this.setIso(iso);
  }
  setIso(iso) {
    this.iso = iso;
    return this;
  }
  getIso() {
    return this.iso;
  }
}

module.exports = Country;
