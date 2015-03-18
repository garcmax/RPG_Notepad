angular.module('SimpleNoteCtrl', []).controller('SimpleNoteController', ['$scope', 'NoteService', function($scope, NoteService) {

    NoteService.query().$promise.then(function (value) {
        $scope.notes = value;
    })

}]);