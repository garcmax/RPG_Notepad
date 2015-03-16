angular.module('services', ['ngResource']).factory('NoteService', ['$resource', function($resource) {

        return $resource('/api/simpleNote/:id', {}, {
            query: {
                'id' : '@id',
                isArray: true
            },
            post: {
                method: 'POST',
                isArray: false
            }
            });

}]);