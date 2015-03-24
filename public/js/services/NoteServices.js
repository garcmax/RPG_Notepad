angular.module('notesServices', ['ngResource']).factory('NoteService', ['$resource', function($resource) {

        return $resource('/api/simpleNote/:id', {id : '@id'},{
                'update': {method: 'PUT'}
        });

}]);