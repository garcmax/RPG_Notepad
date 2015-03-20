describe('controller: simpleNoteCtrl', function() {
      var mockData = [{note: 'note 1', _id: 1}, {note: 'note 2', _id: 2}];

      beforeEach(module('rpgNoteApp'));
      beforeEach(module('services'));

      describe('query', function(){
         var scope, ctrl, $httpBackend;

         beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
           $httpBackend = _$httpBackend_;
           $httpBackend.expectGET('/api/simpleNote').
               respond(mockData);

           scope = $rootScope.$new();
           ctrl = $controller('SimpleNoteController', {$scope: scope});
         }));


         it('should get all simple notes', function() {
           expect(scope.notes).toBe(undefined);
           $httpBackend.flush();

           expect(true).toBe(angular.equals(scope.notes, mockData));
          });
      });
})
