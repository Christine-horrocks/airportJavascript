function Airport() {
  this._allPlanes = [];
};

Airport.prototype.allPlanes = function() {
  return this._allPlanes;
};

Airport.prototype.land = function(plane){
  this._allPlanes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  var index = this._allPlanes.indexOf(plane);
  delete this._allPlanes[index]
};
