class Utils {
  static mapBy(array, prop) {
    return array.map(function(elem) {
      return elem[prop];
    });
  }
  static filterBy(array, prop) {
    return array.filter(function(elem) {
      return !!elem[prop];
    });
  }
}

module.exports = Utils;
