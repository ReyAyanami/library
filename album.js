const Utils = require('./utils.js');

class Album {
  constructor(title, year, tracks = []) {
    this.title = title;
    this.year = year;
    this.tracks = tracks;
  }
  get name() {
    return this.title;
  }
  set name(name) {
    this.title = name;
  }
  setTitle(title) {
    this.title = title;
    return this;
  }
  getTracks() {
    return Utils.mapBy(this.tracks, 'title');
  }
  addTrack(track) {
    this.tracks.push(track);
    return this;
  }
}

module.exports = Album;
