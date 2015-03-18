describe('service : PostItService ', function () {
    var srv, $httpBackend;

    beforeEach(module('rpgNoteApp'));

    beforeEach(function () {
        // inject the mock for the http backend
        inject(function (_$httpBackend_) {
            $httpBackend = _$httpBackend_;
        });

        // inject the service to be tested
        inject(function (_PostItService_) {
            srv = _PostItService_;
        });
    });

    afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
       });

    it('should exist', function () {
        expect( !! srv).toBe(true);
    });

    it('query() should return everyone', function () {

        // mock the response to a particular get request
        $httpBackend.whenGET('/api/postIt').respond([{
            id: 1,
            note: 'toto'
        }, {
            id: 2,
            note: 'tata'
        }]);

        // send request to get everyone
        var data = srv.query();

        // flush the pending resuest
        $httpBackend.flush();
        expect(JSON.stringify(data)).toBe(JSON.stringify([{
            id: 1,
            note: 'toto'
        }, {
            id: 2,
            note: 'tata'
        }]));
    });

    it('get({id: 1}) should return object with id=1', function () {
        // mock the response to a particular get request
        $httpBackend.whenGET('/api/postIt/1').respond({
            id: 1,
            note: 'toto'
        });
        var data = srv.get({
            id: 1
        });
        $httpBackend.flush();
        expect(JSON.stringify(data)).toBe(JSON.stringify({
            id: 1,
            note: 'toto'
        }));
    });

    it ('post a new postit', function () {
        $httpBackend.whenPOST('/api/postIt', {note: 'note', id:'1'}).respond(201, '');
        var data = srv.post();
        $httpBackend.flush();
        expect(data).not.toBe(null);
    });

    it ('delete a postit', function () {
        $httpBackend.whenDELETE('/api/postIt').respond(201, '');
        var data = srv.remove();
        $httpBackend.flush();
        expect(data).not.toBe(null);
    });
});