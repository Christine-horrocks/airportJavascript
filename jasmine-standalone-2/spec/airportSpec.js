describe ('Airport',function(){
  
  it ('has no planes when created', function(){
    var airport = new Airport();
    expect(airport.allPlanes()).toEqual([]);
  });
  
  it('can recieve a plane that lands', function(){
    var plane = 'plane';
    var airport = new Airport();
    airport.land(plane);
    expect(airport.allPlanes()).toEqual([plane]);
  });
});
  



// function Sheep(name) {
//   this._name = name;
// };

// Sheep.prototype.sayName = function() {
//   return this._name;
// };

// var barry = new Sheep(‘Barry’);

// function Pen() {
//   this._allSheep = [];
// };

// Pen.prototype.herd = function(sheep) {
//   this._allSheep.push(sheep);
// };

// Pen.prototype.rollCall = function() {
//   this._allSheep.forEach(function(sheep){
//     console.log(sheep.sayName());
//   });
// };

// var pen = new Pen();
// pen.herd(barry);
// pen.rollCall();