describe('service : NPCService ', function () {
    var srv, $httpBackend;

    beforeEach(module('rpgNoteApp'));

    beforeEach(function () {
        // inject the mock for the http backend
        inject(function (_$httpBackend_) {
            $httpBackend = _$httpBackend_;
        });

        // inject the service to be tested
        inject(function (_NpcService_) {
            srv = _NpcService_;
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
        $httpBackend.whenGET('/api/npc').respond([{
            id: 1,
            note: 'toto',
            name: 'note1'
        }, {
            id: 2,
            note: 'tata',
            name: 'note2'
        }]);

        // send request to get everyone
        var data = srv.query();

        // flush the pending resuest
        $httpBackend.flush();
        expect(JSON.stringify(data)).toBe(JSON.stringify([{
             id: 1,
             note: 'toto',
             name: 'note1'
           }, {
            id: 2,
            note: 'tata',
            name: 'note2'
        }]));
    });

    it('get({id: 1}) should return object with id=1', function () {
        // mock the response to a particular get request
        $httpBackend.whenGET('/api/npc/1').respond({
            id: 1,
            note: 'toto',
            name:'npc'
        });
        var data = srv.get({
            id: 1
        });
        $httpBackend.flush();
        expect(JSON.stringify(data)).toBe(JSON.stringify({
            id: 1,
            note: 'toto',
            name: 'npc'
        }));
    });

    it ('post a new note', function () {
        $httpBackend.whenPOST('/api/npc', {note: 'note', name: 'npc', id:'1'}).respond(201, '');
        var data = srv.save();
        $httpBackend.flush();
        expect(data).not.toBe(null);
    });
});