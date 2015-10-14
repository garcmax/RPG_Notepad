angular.module('notesServices', ['ngResource']).factory('NoteService', ['$resource', function($resource) {

        return $resource('/api/simpleNote/:id', {id : '@id'},{
                'query': {method:'GET', params:{id:''}, isArray:true},
                'create': {method: 'POST'},
                'update': {method: 'PUT'},
                'delete': {method: 'DELETE'}
        });

}]);