angular.module('postItServices', ['ngResource']).factory('PostItService', ['$resource', function($resource) {

        return $resource('/api/postIt/:id', {id : '@id'}, {
            'query': {method:'GET', params:{id:''}, isArray:true},
            'create': {method: 'POST'},
            'update': {method: 'PUT'},
            'delete': {method: 'DELETE'}

        });

}]);