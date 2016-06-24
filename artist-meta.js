const Item = require('./item.js');

class ArtistMeta extends Item {
  constructor(name, country) {
    super(name);
    this.setCountry(country);
  }
  setCountry(country) {
    this.country = country;
    return this;
  }
  getCountry() {
    return this.country;
  }
  set name(name) {
    return this.setTitle(name);
  }
  get name() {
    return this.getTitle();
  }
}

module.exports = ArtistMeta;
