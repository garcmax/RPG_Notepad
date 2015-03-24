angular.module('NpcCtrl', []).controller('NpcController', ['$scope', 'NpcService', function($scope, NpcService) {

    $scope.npcs = [];
    function query() {
        NpcService.query().$promise.then(function (value) {
            $scope.npcs = value;
            $scope.npcDisplayed= value[value.length - 1];
        }, function (err) {

        });
    }

    query();

    $scope.saveNpc = function () {
        NpcService.save($scope.npcDisplayed).$promise.then(function () {
            query();
        }, function (err) {

        });
    };

   $scope.displayNpc = function (npc) {
        $scope.npcDisplayed = npc;
   };

   $scope.deleteNpc = function () {
        NpcService.delete({id: $scope.npcDisplayed._id}).$promise.then(function () {
            query();
        }, function (err) {

        });
   };

}]);