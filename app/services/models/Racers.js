const Racers = {
  _elements: [],
  getAll: function () {
    return this._elements;
  },
  push: function (racer) {
    this._elements.push(racer);
  },
};

module.exports = Racers;
