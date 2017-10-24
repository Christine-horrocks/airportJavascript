describe ('Airport',function(){

  beforeEach(function() {
    var airport = new Airport();
  });

  it ('has no planes when created', function(){
    expect(airport.allPlanes()).toEqual([]);
  });
});
