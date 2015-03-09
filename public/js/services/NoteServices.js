angular.module('NoteServices', []).factory('Note', ['$http', function($http) {

    return {
        get : function() {
            return $http.get('/api/simpleNote');
        }
    }

}]);