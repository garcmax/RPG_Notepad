angular.module('PostItCtrl', []).controller('PostItController', ['$scope', function($scope) {


    //to fill by GET
    $scope.postIts = [{note: "post it 1"}, {note: "post it 2 le deuxième oui sur plusieurs lignes ça donne quoi"}];

    $scope.addPostIt = function () {
        //to do with POST
        $scope.postIts.push({note: $scope.newPostIt});
        $scope.newPostIt = '';
    };

    $scope.removePostIt = function (postIt) {
        console.log(postIt);
        var idx = $scope.postIts.indexOf(postIt);
        console.log(idx);
        var postItToRemove = $scope.postIts[idx];
        console.log(postItToRemove);

        //to do with DELETE
        $scope.postIts.splice(idx, 1);
    };
}]);