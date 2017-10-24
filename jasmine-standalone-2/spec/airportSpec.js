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
});
