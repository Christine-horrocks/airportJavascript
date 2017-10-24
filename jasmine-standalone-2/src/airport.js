function Airport() {
  this._allPlanes = [];
};

Airport.prototype.allPlanes = function() {
  return this._allPlanes;
};

Airport.prototype.land = function(plane){
  this._allPlanes.push(plane);
};
