describe('service : NoteService ', function () {
    var srv, $httpBackend;

    beforeEach(module('rpgNoteApp'));

    beforeEach(function () {
        // inject the mock for the http backend
        inject(function (_$httpBackend_) {
            $httpBackend = _$httpBackend_;
        });

        // inject the service to be tested
        inject(function (_NoteService_) {
            srv = _NoteService_;
        });
    });

    it('should exist', function () {
        expect( !! srv).toBe(true);
    });

    it('query() should return everyone', function () {

        // mock the response to a particular get request
        $httpBackend.whenGET('/api/simpleNote').respond([{
            id: 1,
            note: 'simple note 1'
        }, {
            id: 2,
            note: 'simple note 2'
        }]);

        // send request to get everyone
        var data = srv.query();

        // flush the pending resuest
        $httpBackend.flush();
        expect(JSON.stringify(data)).toBe(JSON.stringify([{
            id: 1,
            note: 'simple note 1'
        }, {
            id: 2,
            note: 'simple note 2'
        }]));
    });

    it('get({id: 1}) should return object with id=1', function () {
        // mock the response to a particular get request
        $httpBackend.whenGET('/api/simpleNote/1').respond({
            id: 1,
            note: 'asdfasdf'
        });
        var datum = srv.get({
            id: 1
        });
        $httpBackend.flush();
        expect(JSON.stringify(datum)).toBe(JSON.stringify({
            id: 1,
            note: 'asdfasdf'
        }));
    });
});