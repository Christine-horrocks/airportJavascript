function Airport() {
  this._allPlanes = [];
  this._capacity = 10;
};

Airport.prototype.allPlanes = function() {
  return this._allPlanes;
};

Airport.prototype.land = function(plane){
  if (this.full() === true) throw new Error({toString: function() { return "NOOO!"; } });
  if (this.full() === false) {
    this._allPlanes.push(plane);
  }
};

Airport.prototype.takeOff = function(plane) {
  var index = this._allPlanes.indexOf(plane);
  delete this._allPlanes[index]
};

Airport.prototype.full = function() {
  return (this._allPlanes.length >= this._capacity);
};

