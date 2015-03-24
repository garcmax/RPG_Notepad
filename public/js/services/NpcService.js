angular.module('npcServices', ['ngResource']).factory('NpcService', ['$resource', function($resource) {

        return $resource('/api/npc/:id', {id : '@id'},{
                'update': {method: 'PUT'}
        });

}]);