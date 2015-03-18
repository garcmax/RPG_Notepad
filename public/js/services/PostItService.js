angular.module('postItServices', ['ngResource']).factory('PostItService', ['$resource', function($resource) {

        return $resource('/api/postIt/:id', {id : '@id'});

}]);