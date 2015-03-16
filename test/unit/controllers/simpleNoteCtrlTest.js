describe('controller: simpleNoteCtrl', function() {
    var scope, controller;

    beforeEach(module('rpgNoteApp'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('SimpleNoteController', {
                '$scope' : scope
            });
        };
    }));

    it ('should print the tagline', function () {
        var controller = createController();
        expect(scope.tagline).toEqual('Nothing beats a pocket protector!');
    });
})
