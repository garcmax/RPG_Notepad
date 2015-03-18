describe('controller: postItCtrl', function() {
    var mockData = [{note: 'note 1', _id: 1}, {note: 'note 2', _id: 2}];

    beforeEach(module('rpgNoteApp'));
    beforeEach(module('postItServices'));

    describe('query', function(){
       var scope, ctrl, $httpBackend;

       beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
         $httpBackend = _$httpBackend_;
         $httpBackend.expectGET('/api/postIt').
             respond(mockData);

         scope = $rootScope.$new();
         ctrl = $controller('PostItController', {$scope: scope});
       }));


       it('should get all postIts', function() {
         expect(scope.postIts).toBe(undefined);
         $httpBackend.flush();

         expect(true).toBe(angular.equals(scope.postIts, mockData));
        });
    });


});
