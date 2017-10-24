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

  it('can instruct a plane to take off', function(){
    var plane = 'plane';
    var airport = new Airport();
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.allPlanes()).not.toContain(plane);
  });

  it ('has a defined maximum capacity', function(){
    var airport = new Airport();
    var times = 10;
    for(var i = 0; i < times; i++){
      var plane = 'plane';
      airport.land(plane);
    };

    var plane = 'plane';
    expect(function() { airport.land(plane); } ).toThrow(new Error("NOOO!"));
  });
});
