class Artist {
  constructor(name, albums, hasGrammy, country) {
    this.name = name;
    this.albums = albums;
    this.hasGrammy = hasGrammy;
    this.country = country;
  }
  getAlbumTitles() {
    return this.albums.map(function(album) {
      return album.title;
    });
  }
  getTracks() {
    return this.albums.map(function(album) {
      return album.getTracks();
    });
  }
}

module.exports = Artist;
