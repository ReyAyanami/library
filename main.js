const Track = require('./track.js');
const Album = require('./album.js');
const Artist = require('./artist.js');
const ArtistMeta = require('./artist-meta.js');
const Country = require('./country.js');
const Library = require('./library.js');
const Utils = require('./utils.js');


var myAlbum = new Album('album1', 2000);
myAlbum.name;
myAlbum.setTitle('some')
       .addTrack(new Track('song1'))
       .addTrack(new Track('song2'));
console.log(myAlbum);

var USA = new Country('USA', 'US');
var GB = new Country('Great Britain', 'GB')

var linkinParkAlbums = [
  new Album('Hybrid Theory', 2001, [
    new Track('Papercut'),
    new Track('One Step Closer')
  ]),
  new Album('Meteora', 2003, [
    new Track('Faint'),
    new Track('Somewhere I Belongs')
  ])
];

var depechModeAlbums = [
  new Album('Precisious', 1990, [
    new Track('Enjoy The Silence'),
    new Track('Precisious')
  ]),
  new Album('Best Album', 1980, [
    new Track('Best Track'),
    new Track('Enjoy The Silence (remix)')
  ])
];

var myMusic = [
  new Artist('Linkin Park', linkinParkAlbums, false, USA),
  new Artist('Depech Mode', depechModeAlbums, true, GB)
];

var library = new Library(myMusic);
console.log(library.getTracks());

function getArtistNames(myMusic) {
  return myMusic.map(function(artist) {
    return artist.name;
  });
}

function getAlbumTitle(artistList) {
  return artistList.map(function(artist) {
    return artist.getAlbumTitles();
  });
}

function getArtistMeta(artistList) {
  return artistList.map(function(artist) {
    return new ArtistMeta(artist.name, artist.country);
  });
}

function getArtistWithGrammy(artistList) {
  return Utils.filterBy(artistList, 'hasGrammy');
}

getArtistNames(getArtistWithGrammy(myMusic));

getArtistMeta(myMusic);

// console.log('');
console.log(getArtistWithGrammy(myMusic));
// console.log('');
// console.log(myMusic);
