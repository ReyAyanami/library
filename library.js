class Library {
  constructor(artistList) {
    this.artistList = artistList;
  }
  getAlbums() {
    return this.artistList.map(function(artist) {
      return artist.albums;
    });
  }
  getTracks() {
    return this.artistList.map(function(artist) {
      return artist.getTracks();
    });
  }
}

module.exports = Library;
