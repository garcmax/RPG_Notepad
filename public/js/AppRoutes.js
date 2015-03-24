angular.module('appRoutes', ['dateNoteInter']).config(['$routeProvider', '$locationProvider', '$httpProvider',
        function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider
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
            controller: 'NpcController'
        });


    $locationProvider.html5Mode(true);

    $httpProvider.interceptors.push('dateNoteInterceptor');

}]);
