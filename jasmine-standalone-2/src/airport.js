function Airport() {
  this._allPlanes = [];
};

Airport.prototype.allPlanes = function() {
  return this._allPlanes;
};