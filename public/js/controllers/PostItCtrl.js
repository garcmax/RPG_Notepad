angular.module('PostItCtrl', []).controller('PostItController', ['$scope', 'PostItService', function($scope, postItSrv) {

    //get all the post its
    function query() {
        postItSrv.query().$promise.then(function (value) {
                $scope.postIts = value;
        });
    }


    $scope.addPostIt = function () {
        //post a new post it
        var newPostIt = {note: $scope.newPostIt};
        postItSrv.save(newPostIt).$promise.then(function (value) {
            query();
        }, function(err) {
            //TODO : error management
            console.log(err);
        });
    };

    $scope.removePostIt = function (postIt) {
        var idx = $scope.postIts.indexOf(postIt);
        var postItToRemove = $scope.postIts[idx];

        //Delete a post it
        postItSrv.delete({id: postItToRemove._id}).$promise.then(function (value) {
            $scope.postIts.splice(idx, 1);
        }, function(err) {
            //TODO : error management
            console.log(err);
        });
    };
}]);