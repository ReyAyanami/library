const Utils = require('./utils.js');
const Collection = require('./collection.js');

class Album extends Collection {
  constructor(title, year, tracks) {
    super(title, tracks);
    this.year = year;
  }
  get name() {
    return this.getTitle();
  }
  set name(name) {
    this.setTitle(name);
  }
  get trackList() {
    return this.getTracks();
  }
  getTracks() {
    return this.getItems();
  }
  addTrack(track) {
    return this.addItem(track);
  }
  removeTrack(track) {
    return this.removeItem(track);
  }
  getTrackNames() {
    return this.mapBy('title');
  }
}

module.exports = Album;
