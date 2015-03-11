describe('controller: mainCtrl', function() {
    var scope, controller;

    beforeEach(module('rpgNoteApp'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('MainController', {
                '$scope' : scope
            });
        };
    }));

    it ('should print the tagline', function () {
        var controller = createController();
        expect(scope.tagline).toEqual('To the moon and back!');
    });
})
