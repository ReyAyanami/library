const ArtistMeta = require('./artist-meta.js');
const Collection = require('./collection.js');

class Artist extends ArtistMeta {
  constructor(name, albums, hasGrammy, country) {
    super(name, country);
    this.albums = new Collection(name, albums);
    this.hasGrammy = hasGrammy;
  }
  get albumList() {
    return this.getAlbums();
  }
  get albumTrackList() {
    return this.getAlbums().map(function(album) {
      return album.getTracks();
    });
  }
  addAlbum(album) {
    return this.albums.addItem(album);
  }
  removeAlbum(album) {
    return this.albums.removeItem(album);
  }
  getAlbums() {
    return this.albums.getItems();
  }
  getAlbumTitles() {
    return this.albums.mapBy('title');
  }
  getAlbumTracks() {
    return this.albums.mapBy('tracks');
  }
}

module.exports = Artist;
