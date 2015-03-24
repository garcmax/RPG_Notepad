describe('filters : search ', function () {
    var searchFilter;
    var npc1 = {name:'toto', note:'first note'};
    var npc2 = {name:'tata', note:'second note'};
    var npc3 = {name:'titi', note:'what a wonderful day'};
    var toSearch = [
        npc1,npc2,npc3
    ];

    beforeEach(module('rpgNoteApp'));
    beforeEach(inject(function(_searchFilter_) {
        searchFilter = _searchFilter_;
      }));

    it('should exist', function () {
        expect( !! searchFilter).toBe(true);
    });

    it('should work without search text', function () {
        expect(searchFilter(toSearch)).toEqual(toSearch);
    });
    it('should find toto', function() {
        var found = [npc1];
        expect(searchFilter(toSearch, 'toto')).toEqual(found);
    });
    it('should find toto and tata', function () {
        var found = [npc1, npc2];
        expect(searchFilter(toSearch, 'note')).toEqual(found);
    });
});