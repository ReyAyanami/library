const Collection = require('./collection.js');

class Library extends Collection {
  constructor(artistList = [], title) {
    super(title, artistList);
  }
  getArtists() {
    return this.getItems();
  }
  addArtist(artist) {
    return this.addItem(artist);
  }
  removeArtist(artist) {
    return this.removeItem(artist);
  }
  getArtistAlbums() {
    return this.mapBy('albumList');
  }

  getArtistAlbumTracks() {
    return this.mapBy('albumTrackList');
  }

}

module.exports = Library;
