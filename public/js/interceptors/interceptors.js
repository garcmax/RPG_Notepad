angular.module('dateNoteInter', []).factory('dateNoteInterceptor', ['$q', '$injector', function($q, $injector) {
   return {
        'response' : function(response) {
            console.log(response);
            return response;
        }
   };
}]);

