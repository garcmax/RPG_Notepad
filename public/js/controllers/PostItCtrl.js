angular.module('PostItCtrl', []).controller('PostItController', ['$scope', function($scope) {

    $scope.postIts = [{note: "post it 1"}, {note: "post it 2 le deuxième oui sur plusieurs lignes ça donne quoi"}];

    $scope.addPostIt = function () {
        $scope.postIts.push({note: $scope.newPostIt});
        $scope.newPostIt = '';
    };

    $scope.removePostIt = function () {

    };
}]);