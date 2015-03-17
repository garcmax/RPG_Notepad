    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })


        .when('/simpleNote', {
            templateUrl: 'views/simpleNotes.html',
            controller: 'SimpleNoteController'
        })

        .when('/npcNote', {
            templateUrl: 'views/npcNotes.html',
            controller: 'PostItController'
        });



    $locationProvider.html5Mode(true);

}]);
