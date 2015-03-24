describe('controller: npcCtrl', function() {
      var mockData = [{note: 'note 1', name: 'name 1', _id: 1}, {note: 'note 2', name: 'name 2', _id: 2}];
      var lastNpc = {note: 'note 2', name: 'name 2', _id: 2};

      beforeEach(module('rpgNoteApp'));
      beforeEach(module('npcServices'));

      describe('query', function(){
         var scope, ctrl;

         beforeEach(inject(function($rootScope, $controller) {
           scope = $rootScope.$new();
           ctrl = $controller('NpcController', {$scope: scope});
           init = {
                query: function () {
                    scope.npcs = mockData;
                }
           }

           spyOn(init, 'query').and.callThrough();
           init.query();
         }));


         it('should get all simple notes', function() {
            expect(init.query).toHaveBeenCalled();
            expect(true).toBe(angular.equals(scope.npcs, mockData));
         });
         /*it('should displayed the last note', function() {
            expect(true).toBe(angular.equals(scope.noteDisplayed, lastNote));
          });*/

      });
})
