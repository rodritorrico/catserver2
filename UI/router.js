const URL = 'http://localhost:3000';

APP.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './UI/views/home.html',
            controller : 'HomeController'
        })

});
